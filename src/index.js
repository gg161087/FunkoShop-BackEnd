import app from './app.js';

const main = () => {
    app.listen(app.get('port'), () => {
        console.log(`Server running http://localhost:${app.get('port')}`);
    });  
};

main();