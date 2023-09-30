const request = require('supertest');
const app = require ('C:/ApiMVCV2/backend/src/app.js');
  
describe('api', function () {
    describe('POST /empleados', function () {
        it('Modelo Vacio - NO SE PUEDE CREAR', done=>{
            const data={
            }
            request(app)
            .post('/empleados')
            .send(data)
            .expect(500)
            .end((err)=>{
                if(err) return done(err);
                done();
            })
        }); 
    });
});

describe('api', function () {
  describe('UPDATE/empleados/XXX', function () {
    it('No hay empleado con ese id- NO SE PUEDE ELIMINAR', function () {
      request(app)
      .post('/empleados/XXX')
      .expect(404);
    });
  });
});

describe('api', function () {
    describe('DELETE/empleados/XXX', function () {
      it('No hay empleado con ese id - NO SE PUEDE ELIMINAR', function () {
        request(app)
        .delete('/empleados/XXX')
        .expect(404);
      });
    });
});