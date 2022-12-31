class adminController{
    chart(req, res){
        res.render('admin/chart', {layout: 'admin-main'});
    }
    home(req, res){
        res.render('admin/home', {layout: 'admin-main'});
    }
    update(req, res){
        res.render('admin/update', {layout: 'admin-main'});
    }
    table(req, res){
        res.render('admin/table', {layout: 'admin-main'});
    }
}

module.exports = new adminController;
