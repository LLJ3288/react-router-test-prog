// Menu component
import React, {Component} from 'react';

class MenuPage extends Component {
    render(){
      return(
        <div>
          <h1>Pizza Menu</h1>
          
            <ul>
                <div>
              <p><b>House Specialty Pizza</b></p>
              <div><img src="/images/Pizza.PNG" alt="" /></div>
              <p><b>Veggie Pizza</b></p>
              <div><img src="/images/Pizzatwo.PNG" alt="" /></div>
              <p><b>DEEP.... Dish Pizza Pie</b></p>
              <div><img src="/images/Pizzapie.PNG" alt="" /></div>
                </div>
            </ul>
          
        </div>
      );
    }
  }

  export default MenuPage;