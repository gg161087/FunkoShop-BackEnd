import productService from '../services/product.service.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();              
        res.json({success: true, data: products});
    } catch (error) {
        res.status(500).json({ success: false, data: error.message });
    }  
}

const getOneProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await productService.getProduct(id);
        res.json({success: true, data: product});
    } catch (error) {
        res.status(404).json({ success: false, data: error.message });
    }
}

const createNewProduct = async (req, res) => {
    const body = req.body;
    let result;
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
        result = { success: false, data: 'faltan campos'}      
    }else {
        let response = await productService.createProduct(body);
        result = { success: true, data: response}
    }       
    res.json(result)
};

const updateOneProduct = async (req, res) => {
    /* const id = req.params.id;
    const body = req.body;
    const licences = await licencesService.getLicences();
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

    const result = await productsService.editProduct(body, id);

    if (!result.isError) {
        const categories = await categoriesService.getCategories();

        res.render('message', {
            view: {
                title: 'Message | Funkoshop'
            },
            categories: categories.data,
            title: 'Funko Modificado',
            description: result.message
        });
    } else {
        
    } */
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