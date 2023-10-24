// Dados de produtos (exemplo)
const products = [
    'Produto A',
    'Produto B',
    'Produto C',
    'Produto D',
    'Produto E',
  ];
  
  // Função para gerar uma recomendação aleatória
  function getRandomRecommendation() {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  }
  
  // Exemplo de recomendação
  const recommendedProduct = getRandomRecommendation();
  
  console.log('Produto recomendado:', recommendedProduct);
  