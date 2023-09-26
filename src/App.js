import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vkus from './Vkus.svg';

function App() {
  return (
    <div className="App">
      <p className='logop'>
      <img className='logogo' src={Vkus} alt='Vkus'/>
      </p>
      <a className='WhAp' target='_blank' href='https://translate.google.ru/'><img className='image' src='https://cdn4.iconfinder.com/data/icons/socialcones/508/WhatsApp-1024.png' /></a>
      <Table striped >
        <tbody>
          <tr>
            <td className='Lg'>Супы</td>
            <td className='Cg'></td>
            <td className='Rg'>מרקים</td>
          </tr>
          <tr>
            <td className='L'> Харчо</td>
            <td className='C'>20</td>
            <td className='R'>חרצ'ו</td>
          </tr>
          <tr>
            <td className='L'>Борщ </td>
            <td className='C'>20</td>
            <td className='R'>בורש</td>
          </tr>

          <tr>
            <td className='Lg'>Салаты(250г)</td>
            <td className='Cg'></td>
            <td className='Rg'>סלטים (250 גר')</td>
          </tr>
          <tr>
            <td className='L'>Оливье</td>
            <td className='C'>20</td>
            <td className='R'>אוליבי</td>
          </tr>
          <tr>
            <td className='L'>Винегрет</td>
            <td className='C'>20</td>
            <td className='R'>הוויניגרט</td>
          </tr>
          <tr>
            <td className='L'>Из баклажанов пикантный</td>
            <td className='C'>20</td>
            <td className='R'>חציל חריף хуй</td>
          </tr>

          <tr>
            <td className='Lg'>Блинчики <br></br>(1 шт.)</td>
            <td className='Cg'></td>
            <td className='Rg'>מרקים</td>
          </tr>
          <tr>
            <td className='L'>С мясом</td>
            <td className='C'>8</td>
            <td className='R'>עם בשר</td>
          </tr>
          <tr>
            <td className='L'>С картошкой</td>
            <td className='C'>8</td>
            <td className='R'>עם תפוח אדמה хуй</td>
          </tr>
          <tr>
            <td className='L'>С грибамии</td>
            <td className='C'>8</td>
            <td className='R'>עם פטריות</td>
          </tr>
          <tr>
            <td className='L'>С капустой</td>
            <td className='C'>8</td>
            <td className='R'>עם כרוב</td>
          </tr>
          <tr>
            <td className='L'>С творогом</td>
            <td className='C'>8</td>
            <td className='R'>עם גבינת</td>
          </tr>
          <tr>
            <td className='L'>С яблоком</td>
            <td className='C'>8</td>
            <td className='R'>עם תפוח хуй</td>
          </tr>
          <tr>
            <td className='L'>С вишней</td>
            <td className='C'>8</td>
            <td className='R'>עם דובדבן</td>
          </tr>
          <tr>
            <td className='L'>С икрой <p>(красной)</p></td>
            <td className='C'>20</td>
            <td className='R'>עם קוויאר<p>(אדום)</p></td>
          </tr>

          <tr>
            <td className='Lg'>Вареники (12шт)</td>
            <td className='Cg'></td>
            <td className='Rg'>ורניקי</td>
          </tr>
          <tr>
            <td className='L'>С картошкой</td>
            <td className='C'>35</td>
            <td className='R'>עם תפוח אדמה хуй</td>
          </tr>
          <tr>
            <td className='L'>С картошкой и грибами</td>
            <td className='C'>35</td>
            <td className='R'>עם תפוחי אדמה ופטריות хуй</td>
          </tr>
          <tr>
            <td className='L'>С творогом</td>
            <td className='C'>35</td>
            <td className='R'>עם גבינת</td>
          </tr>
          <tr>
            <td className='L'>С малиной</td>
            <td className='C'>35</td>
            <td className='R'>עם פטל</td>
          </tr>
          <tr>
            <td className='L'>С вишней</td>
            <td className='C'>35</td>
            <td className='R'>עם דובדבן</td>
          </tr>

          <tr>
            <td className='Lg'>Пельмени (12шт.)</td>
            <td className='Cg'></td>
            <td className='Rg'>כופתאות хуй</td>
          </tr>
          <tr>
            <td className='L'>С телятиной</td>
            <td className='C'>20</td>
            <td className='R'>עם בשר עגל хуй</td>
          </tr>

          <tr>
            <td className='Lg'>Напитки</td>
            <td className='Cg'></td>
            <td className='Rg'>מַשׁקָאוֹת</td>
          </tr>
          <tr>
            <td className='L'>Чай</td>
            <td className='C'>5</td>
            <td className='R'>תה</td>
          </tr>
          <tr>
            <td className='L'>Кофе эспрессо</td>
            <td className='C'>7</td>
            <td className='R'>קפה אספרסו</td>
          </tr>
          <tr>
            <td className='L'>Кофе капучино</td>
            <td className='C'>10</td>
            <td className='R'>קפה קפוצ'ינו</td>
          </tr>
          <tr>
            <td className='L'>Кофе американо</td>
            <td className='C'>10</td>
            <td className='R'>קפה "אמריקנו</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
