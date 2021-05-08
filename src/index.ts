import {app} from './app'
import './controllers/browser.Controller';

function main(){
    
    const server=app.listen(app.get('port'));
    console.log(`server on port `,app.get('port'));
    module.exports=server;
    
}
main();

