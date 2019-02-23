import { baseURL } from '../comun/baseurl';
import { TOKEN_NAME } from '../comun/constantes';
import { JwtService } from '../servicios/jwt.service';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';



export function RestangularConfigFactory(RestangularProvider, jwtService) {
  RestangularProvider.setBaseUrl(baseURL);
  let tokenJWT = localStorage.getItem(TOKEN_NAME);
  // Si no existe el token se crea uno para autenticar
  if (!tokenJWT) {
    jwtService.generarTokenAutenticacion()
    .subscribe( token => {
      console.log("1. SE CREA TOKEN AUTH " + token);
      tokenJWT = token;
      let bearerToken = AUTH_PREFIX + " " + tokenJWT;
      // set static header
      RestangularProvider.setDefaultHeaders({ 'Authorization': bearerToken });
    });
  }else{
    let bearerToken = AUTH_PREFIX + " " + tokenJWT;
    // set static header
    RestangularProvider.setDefaultHeaders({ 'Authorization': bearerToken });

  }

  // Se agrega un interceptor del responso para actualizar el token JWT desppués de la autenticación
  RestangularProvider.addResponseInterceptor((data, operation, what, url, response) => {
    if (data.token) {
      const tokenJWT = data.token;
      const bearerToken = AUTH_PREFIX + " " + tokenJWT;
      RestangularProvider.setDefaultHeaders({ 'Authorization': bearerToken });
    }
    return data;

  });

   // This function must return observable
   let refreshAccesstoken = function () {
    return jwtService.generarTokenAutenticacion();
  };

  // Se intercepta el error 401 el cual es de autorización y se vuelve a generar el token JWT
  // para repetir el llamado al web service
  // Comunmente este error es generado cuando se vence el token, por lo tanto
  // Para iniciar sesión nuevamente se debe generar un token de autenticación
  RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
    if (response.status === 401) {
      refreshAccesstoken()
      .switchMap(refreshAccesstokenResponse => {

        // update Authorization header
        response.request.headers.set('Authorization', 'Bearer ' + refreshAccesstokenResponse)

        return response.repeatRequest(response.request);
      })
      .subscribe(
        res => {
          responseHandler(res);
        },
        err => subject.error(err)
      );

      return false; // error handled
    }
    return true; // error not handled
  });




}
