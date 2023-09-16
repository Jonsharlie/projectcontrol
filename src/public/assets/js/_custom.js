$('.btn-options').one('click', function(event) {
    event.preventDefault();
    $('.btn-group .btn-simple.active').removeClass('active');
    if ($('.btn-group .btn--simple').hasClass('active')) {
        $('.btn-group .btn-simple.active').removeClass('active');
    }
    $(this).activeClass('active');
});

/*
$('#modal-form-area').on('show.bs.modal', function(event) {
    $('#saveArea').one('click', async function() {
        const id = $(this).parents('#modal-form-area').find('#idArea').val()
        const nombre = $(this).parents('#modal-form-area').find('#nombreArea').val()
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/areas/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/areas/create'
            method = "post"
        }
        
        const data = {
            name: nombre
        }

        console.log('id', id)
        console.log('nombre', nombre)
        console.log('url', url)
        console.log('method', method)
        console.log('data', data)

        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        const area = await response.json()
        
        if (area.status == 200) {
            $('#nombreArea').val("")
            $('#idArea').val("")
            $('#modal-form-area').trigger('click.dismiss.bs.modal')
            $('#btnListArea').click();   
        }
    });
});
*/

$('#modal-form-cargo').on('show.bs.modal', function(event) {
    $('#saveCargo').one('click', async function() {
        const nombre = $(this).parents('#modal-form-cargo').find('#nombreCargo').val()
        const id = $(this).parents('#modal-form-cargo').find('#idCargo').val()
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/cargos/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/cargos/create'
            method = "post"
        }
        
        const data = {
            name: nombre
        }

        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        const cargo = await response.json()
        
        if (cargo.status == 200) {
            $('#nombreCargo').val("")
            $('#idCargo').val("")
            $('#modal-form-cargo').trigger('click.dismiss.bs.modal')
            $('#btnListCargo').click();   
        }
    });
});

$('#modal-form-cliente').on('show.bs.modal', function(event) {
    $('#saveCliente').one('click', function() {
        const ruc = $(this).parents('#modal-form-cliente').find('#rucCliente').val()
        const razonSocial = $(this).parents('#modal-form-cliente').find('#razonSocialCliente').val()
        const url = 'http://localhost:8000/api/clientes/create'
        const data = {
            numberRUC: ruc,
            businessName: razonSocial
        }
        // console.log('data nuevo cliente')
        // console.log(data)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function(response) {
            // console.log('response')
            // console.log(response)
            return response.json()
        }).then(function(data) {
            // console.log('data')
            // console.log(data)
        }).catch(error => console.error('Error: ', error))
        $('#modal-form-cliente').trigger('click.dismiss.bs.modal')
    });
});

$('#modal-form-tipotrabajador').on('show.bs.modal', function(event) {
    $('#saveTipoTrabajador').one('click', function() {
        const name = $(this).parents('#modal-form-tipotrabajador').find('#nombreTipoTrabajador').val()
        const url = 'http://localhost:8000/api/tipo-trabajador/create'
        const data = {
            name: name
        }
        // console.log('data nuevo tipotrabajador')
        // console.log(data)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function(response) {
            // console.log('response')
            // console.log(response)
            return response.json()
        }).then(function(data) {
            // console.log('data')
            // console.log(data)
        }).catch(error => console.error('Error: ', error))
        $('#modal-form-tipotrabajador').trigger('click.dismiss.bs.modal')
    });
});

$('#modal-form-tipodocumento').on('show.bs.modal', function(event) {
    $('#saveTipoDocumento').one('click', function() {
        const name = $(this).parents('#modal-form-tipodocumento').find('#nombreTipoDocumento').val()
        const url = 'http://localhost:8000/api/tipo-documento/create'
        const data = {
            name: name
        }
        // console.log('data nuevo tipodocumento')
        // console.log(data)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function(response) {
            // console.log('response')
            // console.log(response)
            return response.json()
        }).then(function(data) {
            // console.log('data')
            // console.log(data)
        }).catch(error => console.error('Error: ', error))
        $('#modal-form-tipodocumento').trigger('click.dismiss.bs.modal')
    });
});

$('#modal-form-tiposervicio').on('show.bs.modal', function(event) {
    $('#saveTipoServicio').one('click', function() {
        const name = $(this).parents('#modal-form-tiposervicio').find('#nombreTipoServicio').val()
        const url = 'http://localhost:8000/api/tipo-servicio/create'
        const data = {
            name: name
        }
        // console.log('data nuevo tiposervicio')
        // console.log(data)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function(response) {
            // console.log('response')
            // console.log(response)
            return response.json()
        }).then(function(data) {
            // console.log('data')
            // console.log(data)
        }).catch(error => console.error('Error: ', error))
        $('#modal-form-tiposervicio').trigger('click.dismiss.bs.modal')
    });
});

$('#btnListArea').one('click', async function() {
    const url = 'http://localhost:8000/api/areas'
    const response = await fetch(url)
    const areas = await response.json()
    let html = ""
    if (areas.status == 404) {
        html += "<tr>";
            html += "<td colspan='3'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        areas.data.forEach(area => {
            html += "<tr>";
                html += "<td>"+area.name+"</td>";
                html += "<td>";
                    if (area.state) {
                        html += "<i class='tim-icons icon-check-2'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0);' class='editArea' data-id="+area.id+"><i class='tim-icons icon-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0);' class='deleteArea' data-id="+area.id+"><i class='tim-icons icon-trash-simple'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    $('.card-body #listArea tbody').html(html)
});

$('#btnListCargo').one('click', async function() {
    const url = 'http://localhost:8000/api/cargos'
    const response = await fetch(url)
    const cargos = await response.json()
    let html = ""
    if (cargos.status == 404) {
        html += "<tr>";
            html += "<td colspan='3'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        cargos.data.forEach(cargo => {
            html += "<tr>";
                html += "<td>"+cargo.name+"</td>";
                html += "<td>";
                    if (cargo.state) {
                        html += "<i class='tim-icons icon-check-2'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='#'><i class='tim-icons icon-pencil'></i></a>&nbsp;";
                    html += "<a href='#'><i class='tim-icons icon-trash-simple'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    $('.card-body #listCargo tbody').html(html)
});

$('.editArea').one('click', async function(event) {
    event.preventDefault();
    let id = $(this).data('id');
    const url = 'http://localhost:8000/api/areas/'+id
    const response = await fetch(url)
    const area = await response.json()
    console.log('area', area)
    $('#idArea').val(id)
    $('#nombreArea').val(area.data.name)
    $('#modal-form-area').modal('show')
})

$('.editCargo').one('click', async function(event) {
    event.preventDefault();
    let id = $(this).data('id');
    const url = 'http://localhost:8000/api/cargos/'+id
    const response = await fetch(url)
    const cargo = await response.json()
    console.log('cargo', cargo)
    $('#idCargo').val(id)
    $('#nombreCargo').val(cargo.data.name)
    $('#modal-form-cargo').modal('show')
})

