<!-- Aşağıda bir dizi görevi ve array'i güncellemek için işlevi kabul eden fonksiyonel bileşen oluşturmanız gerekiyor. Array'deki her bir öğe, "görev" ve "alt görevler" olmak üzere iki alana sahiptir. "Görev" alanı dize açıklamasıyla ilişkilendirilir ve "alt görevler" alanı dize açıklamalarının dizisiyle ilişkilendirilir. Aşağıda böyle örneği bulunmaktadır (bu array aynı zamanda aşağıdaki başlangıç kodunda da bulunmaktadır):


[
  {
    task: "Odayı temizle",
    subtasks: ["Çamaşır yap", "Masa düzenle", "Zeminleri sil"],
  },
  {
    task: "Çalış",
    subtasks: ["Kimya tekrarı yap", "Bir React kodlama sorununu çöz"],
  },
  {
    task: "Web sitesi oluştur",
    subtasks: ["Teknoloji yığını seç", "Sayfaları tasarla", "Geliştir", "Yayınla"],
  },
]


Bileşiminiz, görevleri ve bunlara ilişkin alt görevleri dikey bir liste olarak render etmelidir. Alt görevler, ilgili görevin altında girintili bir liste olarak görüntülenmelidir. Kullanıcı, metni tıklatarak herhangi bir alt görevi tamamlanmış/tamamlanmamış olarak işaretleyebilmelidir. Görevler tıklanabilir olmak zorunda değildir. Bir tamamlanan alt görev, üstü çizili metin olarak görüntülenmelidir. Bir görevin tüm alt görevleri tamamlandığında, görev de üstü çizili olarak görüntülenmelidir. Son olarak, basıldığında tamamlanmış görevleri ve bunlara ilişkin alt görevleri kaldıran buton eklemelisiniz (tamamlanmış olmayan görevlere ilişkin tamamlanmış alt görevleri kaldırmamalıdır). Public'teki resim, bir kullanıcının birkaç alt görevi tıkladıktan sonra tamamlanmış bileşeni göstermektedir.(interview24.png)

Public'teki resimde olduğu gibi, kullanıcı "Tamamlanan görevleri temizle" üzerine tıklarsa, yalnızca "Çalış" görevi ve onunla ilişkilendirilmiş alt görevler kaldırılır(interview24-1.png)

-->
