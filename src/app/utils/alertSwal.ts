import Swal from "sweetalert2"

export function mensajeError( titulo: string ) {
    Swal.fire({
        icon: 'error',
        title: titulo,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

export function mensajeCorrecto( titulo: string, cuerpo: string ) {
  Swal.fire(
    titulo,
    cuerpo,
    'success'
  )
}