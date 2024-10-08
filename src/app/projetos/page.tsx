/* eslint-disable @next/next/no-img-element */
import CardProjects from '../components/CardProjects';


export default function PageProjects() {
  return (
    <div id='page-project' className='md:my-16'>
      <h1 className="font-medium text-center text-sm mt-8">PROJETOS</h1>
      <h2 className="font-bold text-center text-2xl">Conheça meus projetos principais</h2>

      <CardProjects title="To.Do List" description="O projeto To.Do List é um sistema de gerenciamento de tarefas onde o usuário pode adicionar as tarefas ao gerenciador, marcar cada tarefa com concluída, fazer a edição da tarefa ou remover" tec1="HTML" tec2='CSS' tec3='Javascript' imgs="/to-do.png" link='https://to-do-list-iota-mauve.vercel.app/'/>

      <CardProjects title="Pixel Market" description="O projeto Pixel Market é um sistema de ecommerce onde o usuário pode pesquisar os itens disponiveis no catalogo, adicionar os itens ao carrinho e adicionar a lista de desejos. O catalogo dos produtos foi retirado da API do Mercado Livre" tec1="NextJS" tec2='TailwindCSS' tec3='Typescript' imgs="/pixelmarket.png" link='https://pixel-market.vercel.app/'/>

      <CardProjects title="Gerenciador de Produtos" description="O projeto Gerenciador de produtos é um sistema onde o usuário pode cadastrar os produtos no sistema, pode remover o produto cadastrado e edita-lo" tec1="Angular" tec2='CSS' tec3='Typescript' imgs="/gerencprod.png" link='https://github.com/matheuspaiva1/project-angular-yt'/>

      <CardProjects title="Shop Cart" description="O projeto Shop Cart é um sistema de busca de produtos onde o usuário poderá buscar os produtos desejados e adicioná-los à lista de desejos. O sistema utiliza a API do Mercado Livre" tec1="NextJS" tec2='TailwindCSS' tec3='Javascript' imgs="/app cart.png" link='https://github.com/matheuspaiva1/shop-cart'/>
    </div>
  )
}
