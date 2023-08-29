/* Tabii, sahte bir API üzerinde veri ekleme veya güncelleme işlemi yapmak için POST veya PUT HTTP metodlarını kullanabiliriz. Ancak unutmayın ki JSON Server, gerçek bir sunucu olmadığı için veri değişiklikleri yalnızca sahte verileri etkiler. İşte örnek veri ekleme ve güncelleme işlemleri: */

// 4. Veri Ekleme (POST): POST Methodu Kullanarak Veri Ekleme...
// Not: Fetch API kullanarak JSON Server üzerinde data ekleyen ve aynı datanın tekrar eklenmesini engelleyen bir örnek:


const apiUrl = 'http://localhost:3001/books';

const newBook = {
    title: 'Dorian Grayin Portresi',
    author: 'Oscar Wilde'
};

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = `${book.author} -- ${book.title}`;
            document.getElementById('book-list').appendChild(listItem);
        });
        const existingBook = data.find(book => book.title === newBook.title && book.author === newBook.author);
        if (existingBook) {
            throw new Error('Duplicate entry');
        } else {
            // Eğer aynı data yoksa POST isteği ile yeni data ekliyoruz
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Yeni Kitap Eklendi:', data);
                })
                .catch(error => {
                    console.error('Hata:', error);
                })
        }
    })
    .catch(error => {
        console.error('Hata:', error);
    });




/* Bu örneklerde, fetch işlevi ile sahte API'ya POST veya PUT istekleri gönderiliyor. Content-Type başlığı ile verinin JSON formatında olduğunu belirtiyoruz. JSON.stringify ile veriyi JSON formatına çeviriyoruz. Dönen yanıtı JSON formatında alıp işleyebiliriz.

Kod öncelikle veritabanındaki mevcut datayı kontrol eder. Eğer aynı data zaten varsa, "Duplicate entry" hatası fırlatır. Eğer aynı data yoksa, Fetch API kullanarak JSON Server'a POST isteği gönderir ve yeni datayı ekler.

Böylece aynı datayı sadece 1 kez ekleyebilirsiniz. Hata durumlarını kontrol ederek işlemi güvenli bir şekilde gerçekleştirebilirsiniz.

Ancak unutmayalım ki JSON Server, gerçek bir sunucu olmadığı için bu işlemler sadece sahte verileri etkiler. Gerçek bir sunucu üzerinde bu HTTP metodlarını kullanmak için gerçek bir sunucu ve veritabanı gerekecektir. */

