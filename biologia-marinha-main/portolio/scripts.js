document.addEventListener('DOMContentLoaded', function() {
    // 1. Scroll suave para links internos
    const menuLinks = document.querySelectorAll('nav a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
            
            // Adiciona classe ativa ao link clicado
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 2. Animação de fade-in nas seções
    const sections = document.querySelectorAll('.section-content');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configurações iniciais para a animação
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    // 3. Efeito de hover nos projetos
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        });
    });

    // 4. Animação na imagem de perfil
    const profileImage = document.querySelector('.main-image');
    
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(5deg) scale(1.05)';
            this.style.transition = 'transform 0.3s ease, border 0.3s ease';
            this.style.borderColor = '#94d2bd';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0) scale(1)';
            this.style.borderColor = '#0a9396';
        });
    }

    // 5. Efeito de digitação no título principal (se houver)
    const mainTitle = document.querySelector('header h1');
    
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // 6. Animação para as imagens dos projetos
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(img => {
        img.style.transition = 'transform 0.3s ease';
        
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 7. Efeito de onda no footer
    const footer = document.querySelector('footer');
    
    if (footer) {
        footer.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(45deg, #005f73, #0a9396)';
            this.style.transition = 'background 0.5s ease';
        });
        
        footer.addEventListener('mouseleave', function() {
            this.style.background = '#005f73';
        });
    }
});

// Adicionando um listener para mudar o header quando scrollar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '30px 0 10px';
        header.style.boxShadow = 'none';
    }
});

// Personagem falante - coloque no seu arquivo scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const character = document.getElementById('character');
    const speechBubble = document.getElementById('speech-bubble');
    const bubbleText = document.getElementById('bubble-text');
    
    // Mensagens que o personagem pode dizer
    const messages = [
        "Olá! Bem-vindo ao meu portfólio de Biologia Marinha!",
        "Explore meus projetos e descubra a vida marinha!",
        "Os oceanos são fascinantes, não acha?",
        "Clique em mim para mais curiosidades marinhas!",
        "Estima-se que existam mais de 2 milhões de espécies marinhas ainda não identificadas pela ciência.",
        "As ervas marinhas são plantas que se adaptaram à vida na água do mar e desempenham um papel importante em ecossistemas costeiros, servindo de abrigo para muitos animais. "
    ];
    
    // Mostra o balão de fala quando a página carrega
    setTimeout(function() {
        bubbleText.textContent = messages[0];
        speechBubble.classList.add('show');
        
        // Esconde o balão após 5 segundos
        setTimeout(function() {
            speechBubble.classList.remove('show');
        }, 5000);
    }, 1000);
    
    // Faz o personagem falar quando clicado
    character.addEventListener('click', function() {
        // Pega uma mensagem aleatória
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        bubbleText.textContent = randomMessage;
        
        // Mostra o balão
        speechBubble.classList.add('show');
        
        // Esconde o balão após 5 segundos
        setTimeout(function() {
            speechBubble.classList.remove('show');
        }, 5000);
    });
});