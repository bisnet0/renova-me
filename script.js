// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de aparecer suavemente nos textos <p> e <h2>
document.addEventListener("DOMContentLoaded", function () {
    // Selecionar todos os elementos <p> e <h2>
    const elements = document.querySelectorAll("p, h2");

    // Função que será chamada quando o elemento entrar na tela
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Parar de observar o elemento depois que ele se tornar visível
            }
        });
    }, {
        threshold: 0.1 // Quando 10% do elemento estiver visível
    });

    // Adiciona a classe fade-in a todos os elementos
    elements.forEach(element => {
        element.classList.add("fade-in");
        observer.observe(element);
    });
});




// Função para adicionar a classe de animação
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando o elemento entra na tela, ativa a animação
            const element = entry.target;

            // Verifica o tipo de elemento (h2 ou p) e aplica a animação correspondente
            if (element.tagName === 'H2') {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
            } else if (element.tagName === 'P') {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
            }

            // Para de observar o elemento após a animação
            observer.unobserve(element);
        }
    });
}

// Cria o observer de interseção
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // O elemento precisa estar 50% visível para a animação ser ativada
});

// Seleciona todos os h2 e p na página
const h2Elements = document.querySelectorAll('h2');
const pElements = document.querySelectorAll('p');

// Inicia a observação dos elementos
h2Elements.forEach(h2 => observer.observe(h2));
pElements.forEach(p => observer.observe(p));
