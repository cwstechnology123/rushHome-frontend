import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { Loading } from 'notiflix/build/notiflix-loading-aio'
import { Confirm } from 'notiflix/build/notiflix-confirm-aio'

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

export const handleConfirm = (msg= 'Are you sure?') => {
    Confirm.init({
        className: 'notiflix-confirm',
        width: '300px',
        zindex: 4003,
        position: 'center', // 'center' - 'center-top' - 'center-bottom' - 'right-top' - 'right-center' - 'right-bottom' - 'left-top' - 'left-center' - 'left-bottom'
        distance: '10px',
        backgroundColor: '#f8f8f8',
        borderRadius: '25px',
        backOverlay: true,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        rtl: false,
        fontFamily: 'Quicksand',
        cssAnimation: true,
        cssAnimationDuration: 300,
        cssAnimationStyle: 'fade', // 'zoom' - 'fade'
        plainText: true,
    
        titleColor: '#32c682',
        titleFontSize: '16px',
        titleMaxLength: 34,
    
        messageColor: '#1e1e1e',
        messageFontSize: '14px',
        messageMaxLength: 110,
    
        buttonsFontSize: '15px',
        buttonsMaxLength: 34,
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#32c682',
        cancelButtonColor: '#f8f8f8',
        cancelButtonBackground: '#a9a9a9',
    });

    
    Confirm.show(
        'Confirm',
        msg,
        'Yes',
        'No',
        function okCb() {
            return true
        },
        function cancelCb() {
            return false
        },
        {
        width: '320px',
        borderRadius: '8px',
        // etc...
        },
    );
}