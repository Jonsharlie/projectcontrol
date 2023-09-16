// área

jQuery('#modal-form-area').on('show.bs.modal', function(event) {
    jQuery('#guardarArea').one('click', async function() {
        const id = jQuery(this).parents('#modal-form-area').find('#idArea').val()
        const nombre = jQuery(this).parents('#modal-form-area').find('#nombreArea').val()
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

        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        const area = await response.json()
        
        if (area.status == 200) {
            jQuery('#nombreArea').val("")
            jQuery('#idArea').val("")
            jQuery('#modal-form-area').trigger('click.dismiss.bs.modal')
            jQuery('#btnListArea').click();   
        }
    });
});

jQuery('#btnListArea').one('click', async function() {
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
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0);' class='editarArea' data-id="+area.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0);' class='eliminarArea' data-id="+area.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listArea tbody').html(html)
});

// cargo
jQuery('#modal-form-cargo').on('show.bs.modal', function(event) {
    jQuery('#guardarCargo').one('click', async function() {
        const nombre = jQuery(this).parents('#modal-form-cargo').find('#nombreCargo').val()
        const id = jQuery(this).parents('#modal-form-cargo').find('#idCargo').val()
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
            jQuery('#nombreCargo').val("")
            jQuery('#idCargo').val("")
            jQuery('#modal-form-cargo').trigger('click.dismiss.bs.modal')
            jQuery('#btnListCargo').click();   
        }
    });
});

jQuery('#btnListCargo').one('click', async function() {
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
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0)' class='editarCargo' data-id="+cargo.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0)' class='eliminarCargo' data-id="+cargo.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listCargo tbody').html(html)
});

// tipo de documento
jQuery('#modal-form-tipodocumento').on('show.bs.modal', function(event) {
    jQuery('#guardarTipoDocumento').one('click', async function() {
        const id = jQuery(this).parents('#modal-form-tipodocumento').find('#idTipoDocumento').val()
        const nombre = jQuery(this).parents('#modal-form-tipodocumento').find('#nombreTipoDocumento').val()
        const abreviatura = jQuery(this).parents('#modal-form-tipodocumento').find('#abreviatura').val()
        const longitud = jQuery(this).parents('#modal-form-tipodocumento').find('#longitudTipoDocumento').val()
        const chkPersonaNatural = parseInt(jQuery(this).parents('#modal-form-tipodocumento').find('input[name="chkPersonaNatural"]:checked').val())
        const chkPersonaJuridica = parseInt(jQuery(this).parents('#modal-form-tipodocumento').find('input[name="chkPersonaJuridica"]:checked').val())
        const person = chkPersonaNatural === 1 ? true : false
        const company = chkPersonaJuridica === 1 ? true : false
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/tipo-documento/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/tipo-documento/create'
            method = "post"
        }
        
        const data = {
            name: nombre,
            abbreviation: abreviatura,
            length: longitud,
            person: person,
            company: company
        }

        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        const tipoDocumento = await response.json()
        
        if (tipoDocumento.status == 200) {
            jQuery('#idTipoDocumento').val("")
            jQuery('#nombreTipoDocumento').val("")
            jQuery('#abreviatura').val("")
            jQuery('#longitudTipoDocumento').val("")
            jQuery('#chkPersonaNatural_yes').prop('checked', true)
            jQuery('#chkPersonaJuridica_no').prop('checked', true)
            jQuery('#modal-form-tipodocumento').trigger('click.dismiss.bs.modal')
            jQuery('#btnListTipoDocumento').click();   
        }
    });
});

jQuery('#btnListTipoDocumento').one('click', async function() {
    const url = 'http://localhost:8000/api/tipo-documento'
    const response = await fetch(url)
    const tipodocs = await response.json()
    let html = ""
    if (tipodocs.status == 404) {
        html += "<tr>";
            html += "<td colspan='5'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        tipodocs.data.forEach(tipodoc => {
            html += "<tr>";
                html += "<td>"+tipodoc.name+"</td>";
                html += "<td>"+tipodoc.abbreviation+"</td>";
                html += "<td>"+tipodoc.length+"</td>";
                html += "<td>";
                    if (tipodoc.state) {
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0)' class='editarTipoDocumento' data-id="+tipodoc.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0)' class='eliminarTipoDocumento' data-id="+tipodoc.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listTipoDocumento tbody').html(html)
});

// tipo de personal
jQuery('#modal-form-tipopersonal').on('show.bs.modal', function(event) {
    jQuery('#guardarTipoPersonal').one('click', async function() {
        const id = jQuery(this).parents('#modal-form-tipopersonal').find('#idTipoPersonal').val()
        const nombre = jQuery(this).parents('#modal-form-tipopersonal').find('#nombreTipoPersonal').val()
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/tipo-personal/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/tipo-personal/create'
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

        const tipoPersonal = await response.json()
        
        if (tipoPersonal.status == 200) {
            jQuery('#idTipoPersonal').val("")
            jQuery('#nombreTipoPersonal').val("")
            jQuery('#modal-form-tipopersonal').trigger('click.dismiss.bs.modal')
            jQuery('#btnListTipoPersonal').click();   
        }
    });
});

jQuery('#btnListTipoPersonal').one('click', async function() {
    const url = 'http://localhost:8000/api/tipo-personal'
    const response = await fetch(url)
    const tipospersonal = await response.json()
    let html = ""
    if (tipospersonal.status == 404) {
        html += "<tr>";
            html += "<td colspan='3'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        tipospersonal.data.forEach(tipopersonal => {
            html += "<tr>";
                html += "<td>"+tipopersonal.name+"</td>";
                html += "<td>";
                    if (tipopersonal.state) {
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0)' class='editarTipoPersonal' data-id="+tipopersonal.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0)' class='eliminarTipoPersonal' data-id="+tipopersonal.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listTipoPersonal tbody').html(html)
});

// tipo de servicio
jQuery('#modal-form-tiposervicio').on('show.bs.modal', function(event) {
    jQuery('#guardarTipoServicio').one('click', async function() {
        const id = jQuery(this).parents('#modal-form-tiposervicio').find('#idTipoServicio').val()
        const nombre = jQuery(this).parents('#modal-form-tiposervicio').find('#nombreTipoServicio').val()
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/tipo-servicio/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/tipo-servicio/create'
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

        const tipoServicio = await response.json()
        
        if (tipoServicio.status == 200) {
            jQuery('#idTipoServicio').val("")
            jQuery('#nombreTipoServicio').val("")
            jQuery('#modal-form-tiposervicio').trigger('click.dismiss.bs.modal')
            jQuery('#btnListTipoServicio').click();   
        }
    });
});

jQuery('#btnListTipoServicio').one('click', async function() {
    const url = 'http://localhost:8000/api/tipo-servicio'
    const response = await fetch(url)
    const tipoServicios = await response.json()
    let html = ""
    if (tipoServicios.status == 404) {
        html += "<tr>";
            html += "<td colspan='3'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        tipoServicios.data.forEach(tipoServicio => {
            html += "<tr>";
                html += "<td>"+tipoServicio.name+"</td>";
                html += "<td>";
                    if (tipoServicio.state) {
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0)' class='editarTipoServicio' data-id="+tipoServicio.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0)' class='eliminarTipoServicio' data-id="+tipoServicio.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listTipoServicio tbody').html(html)
});

// cliente
jQuery('#modal-form-cliente').on('show.bs.modal', function(event) {
    jQuery('#guardarCliente').one('click', async function() {
        const id = jQuery(this).parents('#modal-form-cliente').find('#idCliente').val()
        const idTipoDocumento = jQuery(this).parents('#modal-form-cliente').find('#idTipoDocumento').val()
        const numeroDocumento = jQuery(this).parents('#modal-form-cliente').find('#numeroDocumento').val()
        const nombre = jQuery(this).parents('#modal-form-cliente').find('#nombre').val()
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/clientes/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/clientes/create'
            method = "post"
        }
        
        const data = {
            id_typedocument: idTipoDocumento,
            documentNumber: numeroDocumento,
            name: nombre
        }

        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        const cliente = await response.json()
        
        if (cliente.status == 200) {
            jQuery('#idCliente').val("")
            jQuery('#numeroDocumento').val("")
            jQuery('#nombre').val("")
            jQuery('#modal-form-cliente').trigger('click.dismiss.bs.modal')
            jQuery('#btnListCliente').click();   
        }
    });
});

jQuery('#btnListCliente').one('click', async function() {
    const url = 'http://localhost:8000/api/clientes'
    const response = await fetch(url)
    const clientes = await response.json()
    let html = ""
    if (clientes.status == 404) {
        html += "<tr>";
            html += "<td colspan='5'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        clientes.data.forEach(cliente => {
            html += "<tr>";
                html += "<td>"+cliente.documentNumber+"</td>";
                html += "<td>"+cliente.typeDocument.abbreviation+"</td>";
                html += "<td>"+cliente.name+"</td>";
                html += "<td>";
                    if (cliente.state) {
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0)' class='editarCliente' data-id="+cliente.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0)' class='eliminarCliente' data-id="+cliente.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listCliente tbody').html(html)
});

// personal
jQuery('#modal-form-personal').on('show.bs.modal', function(event) {
    jQuery('#guardarPersonal').one('click', async function() {
        const id = jQuery(this).parents('#modal-form-personal').find('#idPersonal').val()
        const firstName = jQuery(this).parents('#modal-form-personal').find('#firstName').val()
        const lastName = jQuery(this).parents('#modal-form-personal').find('#lastName').val()
        const email = jQuery(this).parents('#modal-form-personal').find('#email').val()
        const phone = jQuery(this).parents('#modal-form-personal').find('#phone').val()
        const idTypeStaff = jQuery(this).parents('#modal-form-personal').find('#id_typestaff').val()
        const idArea = jQuery(this).parents('#modal-form-personal').find('#id_area').val()
        const idCargo = jQuery(this).parents('#modal-form-personal').find('#id_cargo').val()
        const idTypeDocument = jQuery(this).parents('#modal-form-personal').find('#id_typedocument').val()
        const documentNumber = jQuery(this).parents('#modal-form-personal').find('#documentNumber').val()
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/personal/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/personal/create'
            method = "post"
        }
        
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            id_area: idArea,
            id_charge: idCargo,
            id_typestaff: idTypeStaff,
            id_typedocument: idTypeDocument,
            documentNumber: documentNumber
        }

        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        const staff = await response.json()
        
        if (staff.status == 200) {
            jQuery('#idPersonal').val("")
            jQuery('#firstName').val("")
            jQuery('#lastName').val("")
            jQuery('#email').val("")
            jQuery('#phone').val("")
            jQuery('#documentNumber').val("")
            jQuery('#modal-form-personal').trigger('click.dismiss.bs.modal')
            jQuery('#btnListPersonal').click();   
        }
    });
});

jQuery('#btnListPersonal').one('click', async function() {
    const url = 'http://localhost:8000/api/personal'
    const response = await fetch(url)
    const staffs = await response.json()
    let html = ""
    if (staffs.status == 404) {
        html += "<tr>";
            html += "<td colspan='8'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        staffs.data.forEach(staff => {
            html += "<tr>";
                html += "<td>"+staff.firstName+"</td>";
                html += "<td>"+staff.lastName+"</td>";
                html += "<td>"+staff.documentNumber+"</td>";
                html += "<td>"+staff.typeStaff.name+"</td>";
                html += "<td>"+staff.area.name+"</td>";
                html += "<td>"+staff.charge.name+"</td>";
                html += "<td>";
                    if (staff.state) {
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0)' class='editarPersonal' data-id="+staff.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0)' class='eliminarPersonal' data-id="+staff.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listPersonal tbody').html(html)
});

// estado de actividad
jQuery('#modal-form-estadoactividad').on('show.bs.modal', function(event) {
    jQuery('#guardarEstadoActividad').one('click', async function() {
        const id = jQuery(this).parents('#modal-form-estadoactividad').find('#idEstadoActividad').val()
        const nombre = jQuery(this).parents('#modal-form-estadoactividad').find('#nombreEstadoActividad').val()
        let url = "";
        let method = "";
        if (id !== undefined && id.length !== 0) {
            url =  'http://localhost:8000/api/estado-actividad/update/'+id
            method = "put"
        } else {
            url = 'http://localhost:8000/api/estado-actividad/create'
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

        const estadoActividad = await response.json()
        
        if (estadoActividad.status == 200) {
            jQuery('#idEstadoActividad').val("")
            jQuery('#nombreEstadoActividad').val("")
            jQuery('#modal-form-estadoactividad').trigger('click.dismiss.bs.modal')
            jQuery('#btnListEstadoActividad').click();   
        }
    });
});

jQuery('#btnListEstadoActividad').one('click', async function() {
    const url = 'http://localhost:8000/api/estado-actividad'
    const response = await fetch(url)
    const estadosActividad = await response.json()
    let html = ""
    if (estadosActividad.status == 404) {
        html += "<tr>";
            html += "<td colspan='3'>No se encontraron registros</td>";
        html += "</tr>";
    } else {
        estadosActividad.data.forEach(estadoActividad => {
            html += "<tr>";
                html += "<td>"+estadoActividad.name+"</td>";
                html += "<td>";
                    if (estadoActividad.state) {
                        html += "<i class='fa fa-check'></i>";
                    } else {
                        html += "<i class='tim-icons icon-simple-remove'></i>";
                    }
                html += "</td>";
                html += "<td>";
                    html += "<a href='javascript:void(0)' class='editarEstadoActividad' data-id="+estadoActividad.id+"><i class='fa fa-pencil'></i></a>&nbsp;";
                    html += "<a href='javascript:void(0)' class='eliminarEstadoActividad' data-id="+estadoActividad.id+"><i class='fa fa-trash-o'></i></a>";
                html += "</td>";
            html += "</tr>";
        });
    }
    jQuery('.card-body #listEstadoActividad tbody').html(html)
});