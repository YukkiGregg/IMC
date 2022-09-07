function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}
    function validate()
    {
        const peso   = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border   = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value)
        {
            if(!peso.value && !altura.value)
            {
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }
            else if(!peso.value)
            {
                peso.style.border = '1px solid red';
            }
            else
            {
                altura.style.border = '1px solid red';
            }
        }
        else
        {
            let imc = peso.value / (altura.value * altura.value);
            const result = document.getElementById('resultado');
            if(imc < 18.5)
            {
                console.log('Magreza | Peso Normal');
                result.style.color = 'yellow';
                result.style.fontSize = '45px';
                result.innerHTML = 'Seu peso está entre a magreza e a normalidade, segue abaixo as comidas que você pode comer:';
                display_image('cafe.jpg', 376, 210, 'cafe');
                display_image('carnes.jpg', 376, 210, 'carnes');
                display_image('castanhas.webp', 376, 210, 'castanhas');
                display_image('chas.jpg', 376, 210, 'chas');
                display_image('doces.jpg', 376, 210, 'doces');
                display_image('frutas.png', 376, 210, 'frutas');
                display_image('frutos do mar.jpg', 376, 210, 'frutos do mar');
                display_image('hamburger.jpg', 376, 210, 'hamburger');
                display_image('legumes.jpg', 376, 210, 'legumes');
                display_image('leite.jpg', 376, 210, 'leite');
                display_image('massa.jpg', 376, 210, 'massa');
                display_image('pizza.jpg', 376, 210, 'pizza');
                
            }
            else if(imc >= 18.5 && imc < 25)
            {
                console.log('Normal | Pré obeso');
                result.style.color = 'green';
                result.style.fontSize = '45px';
                result.innerHTML = 'Seu peso está entre a normalidade ea pré obesidade, segue abaixo as comidas que você pode comer:';
                display_image('cafe.jpg', 376, 210, 'cafe', );
                display_image('carnes.jpg', 376, 210, 'carnes');
                display_image('castanhas.webp', 376, 210, 'castanhas');
                display_image('chas.jpg', 376, 210, 'chas');
                display_image('doces.jpg', 376, 210, 'doces');
                display_image('frutas.png', 376, 210, 'frutas');
                display_image('frutos do mar.jpg', 376, 210, 'frutos do mar');
                display_image('hamburger.jpg', 376, 210, 'hamburger');
                display_image('legumes.jpg', 376, 210, 'legumes');
                display_image('leite.jpg', 376, 210, 'leite');
                display_image('massa.jpg', 376, 210, 'massa');
                display_image('pizza.jpg', 376, 210, 'pizza');

            }
            else if(imc >= 25 && imc < 30)
            {
                console.log('Sobrepeso | Obesidade: I');
                result.style.color = 'yellow';
                result.style.fontSize = '45px';
                result.innerHTML = 'Seu peso está entre o sobrepeso ea obesidade 1, segue abaixo as comidas que você pode comer:';
                display_image('carnes.jpg', 376, 210, 'carnes');
                display_image('castanhas.webp', 376, 210, 'castanhas');
                display_image('chas.jpg', 376, 210, 'chas');
                display_image('frutas.png', 376, 210, 'frutas');
                display_image('frutos do mar.jpg', 376, 210, 'frutos do mar');
                display_image('legumes.jpg', 376, 210, 'legumes');
                display_image('leite.jpg', 376, 210, 'leite');
                display_image('massa.jpg', 376, 210, 'massa');
            }
            else if(imc >= 30 && imc < 40)
            {
                console.log('Obesidade: I | Obesidade: II');
                result.style.color = 'red';
                result.style.fontSize = '45px';
                result.innerHTML = 'Seu peso está entre a obesidade 1 e 2, segue abaixo as comidas que você pode comer:';
                display_image('carnes.jpg', 376, 210, 'carnes');
                display_image('chas.jpg', 376, 210, 'chas');
                display_image('frutas.png', 376, 210, 'frutas');
                display_image('frutos do mar.jpg', 376, 210, 'frutos do mar');
                display_image('legumes.jpg', 376, 210, 'legumes');
                display_image('leite.jpg', 376, 210, 'leite');
            }
            else
            {
                console.log('Obesidade grave | Obesidade: III');
                result.style.color = 'red';
                result.style.fontSize = '45px';
                result.innerHTML = 'Seu peso está entre a obesidade 2 e 3, segue abaixo as comidas que você pode comer:';
                display_image('chas.jpg', 376, 210, 'chas');
                display_image('frutas.png', 376, 210, 'frutas');
                display_image('legumes.jpg', 376, 210, 'legumes');
                display_image('leite.jpg', 376, 210, 'leite');
            }
            
               }       
            }