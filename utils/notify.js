import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { Loading } from 'notiflix/build/notiflix-loading-aio'

export const handleSuccess = (msg) => {
    Loading.remove();
    Notify.success(msg);
}

export const handleError = (err) => {
    Loading.remove();
    Notify.failure(err);
}

export const handleLoading = (msg= 'Please wait...') => {
    Loading.standard(msg);
}