// Not: Kodlar Aşağıdadır..(45.satırdan itibaren)
/* Tabii ki, sahte bir API oluşturmak için JSON Server gibi araçları kullanabiliriz. JSON Server, JSON dosyası veya nesnesi üzerinden sahte bir RESTful API oluşturmamıza yardımcı olur. İşte JSON Server'ı kullanarak sahte bir API oluşturmanın adımları: */

/* Öncelikle, Node.js yüklü olmalıdır. Eğer yüklü değilse Node.js'yi buradan indirebilirsiniz.

Terminal veya Komut İstemi kullanarak bir proje klasörü oluşturun ve içine girin.

Aşağıdaki komutları sırasıyla çalıştırarak gerekli paketleri yükleyin: */

/* Paketler:
    npm init -y
    npm install json-server
*/


/*
    - Proje klasöründe bir db.json dosyası oluşturun ve içine sahte verileri ekleyin. Örnek bir db.json dosyası:
    {
        "books": [
            { "id": 1, "title": "Book 1", "author": "Author 1" },
            { "id": 2, "title": "Book 2", "author": "Author 2" },
            { "id": 3, "title": "Book 3", "author": "Author 3" }
        ]
    }



    - package.json dosyasındaki "scripts" bölümüne aşağıdaki satırı ekleyin:
    - "scripts": {
        "start": "json-server --watch db.json --port 3001"
    }
    - Bu, JSON Server'ı db.json dosyasını izlemesi için başlatacaktır. Port numarasını 3001 olarak ayarladık, ancak istediğiniz bir port numarasını kullanabilirsiniz.



    - Terminal veya Komut İstemi'nde aşağıdaki komutu çalıştırarak JSON Server'ı başlatın:
    - npm start

    - Artık sahte bir API, http://localhost:3001 adresinde çalışıyor olacak. Örneğin, http://localhost:3001/books adresine GET isteği göndererek sahte kitap verilerini alabilirsiniz.

    - Böylece, JSON Server'ı kullanarak sahte bir API oluşturabilir ve Fetch API veya diğer HTTP istemcileri ile bu sahte API üzerinden verileri çekebilirsiniz.
*/


// Aşağıda Fetch API kullanarak http://localhost:3001/books adresine GET isteği göndererek sahte kitap verilerini alan bir JavaScript kodu:

// GET isteği için URL
const apiUrl = 'http://localhost:3001/books';

// GET isteği gönderme
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Gelen verileri işleme
        console.log('Fake Kitap Verileri', data);
        // Burada verileri kullanarak istediğimiz işlemleri yapabiliriz.
        data.forEach(value => {
            document.write(value.title + " -- " + value.author +  "<br />");
        });
    })
    .catch(error => {
        console.error('Hata:', error);
    })

/* Bu kod, fetch işlevini kullanarak http://localhost:3001/books adresine bir GET isteği gönderir. Gelen yanıt başarılıysa, veriyi JSON formatına çevirir ve bu verileri işlemek üzere kullanabiliriz. Hata durumunda ise bir hata mesajı görüntüler.

Bu kodu HTML sayfamıza ekleyebilir veya JavaScript projenizin içinde kullanabiliriz. Unutmayın ki bu örnekte, sahte bir API'ya gerçek bir sunucu üzerinden erişim sağlamıyorsunuz; JSON Server'ı yerel olarak çalıştırmanız gerekmektedir. */