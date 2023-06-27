import Docs, { type Secctions } from '../../../components/docs'

const links = (
  <>
    <a href="https:/github.com/"> git</a>
  </>
)

const secctions: Secctions = [
  {
    title: 'discord title 1',
    body: (
      <p>
        rem ipsum dolor sit, amet consectetur adipisicing elit. Ab nobis dolor sunt voluptate repellat autem rem, iusto
        commodi nam quos, ea rerum reiciendis corporis explicabo nesciunt velit? Aliquam, culpa sed. Ullam, cupiditate
        et, tempora, amet ipsum ex quasi quaerat praesentium doloremque adipisci officiis consequuntur minima eius vitae
        totam facere fugit temporibus possimus iure asperiores! Porro debitis quidem ullam sit obcaecati? Reprehenderit,
        corrupti. Autem, ullam! Tenetur, modi ipsa et ratione illum sit harum praesentium hic repudiandae ea ut adipisci
        architecto fuga accusamus? Animi corrupti esse nulla veritatis exercitationem nemo reiciendis magni.
      </p>
    ),
  },
  {
    title: 'discord title 2',
    body: (
      <p>
        rem ipsum dolor sit, amet consectetur adipisicing elit. Ab nobis dolor sunt voluptate repellat autem rem, iusto
        commodi nam quos, ea rerum reiciendis corporis explicabo nesciunt velit? Aliquam, culpa sed. Ullam, cupiditate
        et, tempora, amet ipsum ex quasi quaerat praesentium doloremque adipisci officiis consequuntur minima eius vitae
        totam facere fugit temporibus possimus iure asperiores! Porro debitis quidem ullam sit obcaecati? Reprehenderit,
        corrupti. Autem, ullam! Tenetur, modi ipsa et ratione illum sit harum praesentium hic repudiandae ea ut adipisci
        architecto fuga accusamus? Animi corrupti esse nulla veritatis exercitationem nemo reiciendis magni.
      </p>
    ),
  },
]
function DiscordBot() {
  return {
    title: 'Discord Bot',
    iconlink: '',
    article: <Docs sections={secctions} links={links} />,
  }
}

export default DiscordBot
