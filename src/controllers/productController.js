import productService from '../services/productService.js';
import categoryService from '../services/categoryService.js';
import licenceService from '../services/licenceService.js';

const getAllProducts = async (req, res) => {  
    const products = await productService.getProducts();        
    if(products.length > 0) {
        res.json({
            succes: true,
            data: products
        })
    }else {
        res.json({
            succes: false,
            message: products.e
        }) 
    } 
}
const getOneProduct = async (req, res) => {
    const id = req.params.id
    const product = await productService.getProduct(id);         
    if(product.length > 0) {
        res.json({
            succes: true,
            data: product
        })
    }else {
        res.json({
            succes: false,
            message: product.e
        }) 
    }
}

const createNewProduct = async (req, res) => {
    const body = req.body;

    if(
        !body.name ||
        !body.description ||
        !body.price ||
        !body.stock ||
        !body.discount ||
        !body.sku ||
        !body.dues ||
        !body.image_front ||
        !body.image_back ||
        !body.license ||
        !body.category
    ){
        res.json({
            succes: false,
            message: 'faltan campos'
        }) 
    }else {
        const result = await productService.createProduct(body);
        res.json({
            succes: true,
            message: result
        })   
    }       
};

const updateOneProduct = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const licences = await licenceService.getLicences();
    const lincence_name = licences.data[req.body.collection - 1].licence_name;
    let url_front = '';
    let url_back = '';
    let image_front = body.images
    let image_back = image_front.replace(/-1\.webp$/, "-box.webp");

    switch (lincence_name) {
        case 'Harry Potter':
            url_front = `harry-potter/${image_front}`;
            url_back = `harry-potter/${image_back}`;
            break;
        case 'Star Wars':
            url_front = `star-wars/${image_front}`;
            url_back = `star-wars/${image_back}`;
            break;
        case 'Pokemon':
            url_front = `pokemon/${image_front}`;
            url_back = `pokemon/${image_back}`;
            break;
        default:
            console.log('No has seleccionado ninguna película válida.');            
            break;
    }
    body.image_front = url_front;
    body.image_back = url_back;

    const result = await productService.editProduct(body, id);

    if (!result.isError) {
        const categories = await categoryService.getCategories();

        res.render('message', {
            view: {
                title: 'Message | Funkoshop'
            },
            categories: categories.data,
            title: 'Funko Modificado',
            description: result.message
        });
    } else {
        
    }
};
const deleteOneProduct = async (req, res) => {
    const id = req.params.id;

    await productService.deleteProduct(id);
    res.redirect('/admin');
};

export default {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
};