import app from './app'
import '@babel/polyfill'


async function main() {
    await app.listen(4000)
    console.log('server on port 4000')
    // const asd = await sequelize.sync({force: true})
    // console.log(asd)
    // .catch(error => {
    //     console.log(error)
    // })
};

main();

