$(document).ready(function() {

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        method: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('div.loader').show();
        },
        success: function(data) {
            $('div.loader').hide();
            for (let i = 0; i < data.length; i++) {
                let html = (`
                <div class="carousel-item ${i == 0 ? 'active' : ''} text-white py-5 p5 id="carousel-item">
                    <div class="row justify-content-around">
                        <div class="col-sm-1 p-3 ">
                            <img class="rounded-circle mx-auto  my-3 d-block" src=${data[i].pic_url} width="150" height="150" alt="First slide">
                        </div>
                        <div class="col-sm-5 ">
                            <p>${data[i].text}</p>
                            <p><span class="font-weight-bold">${data[i].name}</span><br>
                                <span class="font-italic">${data[i].title}</span></p>
                        </div>
                    </div>
                </div>
            </div>
                `);
                $('#carousel-inner').append(html);
                $('#carousel-inner1').append(html);
            }
        }
    }

)});