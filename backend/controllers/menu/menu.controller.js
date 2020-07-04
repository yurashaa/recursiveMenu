const {menuService} = require('../../service');

module.exports = {
    getAllItems: (req, res) => {
        const items = menuService.getItems();

        res.json(items);
    }
};
