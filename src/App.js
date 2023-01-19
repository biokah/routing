import logo from './logo.svg';
import './App.css';

function App() {
  const arr = [1, 2, 3, 4, 5]
  
  return (
    <div className="container mx-auto px-4">
      <nav>
        <ul className="flex">
          {arr.map(navItem => {
            return(
              <li key={navItem} className="mx-4 mt-4 mb-6">
                {navItem}
              </li>
            )
          })}
        </ul>
      </nav>
      {arr.map(item => {
        return(
          <article className="mb-8" key={item}>
            <h1 className="font-bold text-3xl mb-4">Lorem Ipsum {item}</h1>
            <p className="leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis erat a nibh iaculis laoreet ac eu orci. Phasellus semper quam posuere nisl porta, sed sodales leo porta. Pellentesque eget iaculis purus. Cras ultrices sem eget ex consequat finibus. Aliquam dignissim egestas gravida. Aenean luctus dui augue, imperdiet mollis metus blandit vel. Nunc nec scelerisque quam.
              Donec viverra tempor vehicula. Fusce vitae enim ligula. Duis eget posuere massa. Etiam dapibus risus at ultricies sagittis. Pellentesque maximus eu justo at ultricies. Nulla dapibus facilisis porta. Duis id tempus quam. Nam vulputate a est non fringilla. Ut venenatis, orci vitae maximus elementum, sem ante sagittis erat, et mollis risus ex at tortor. Nunc aliquam augue vitae turpis cursus hendrerit. Sed eu feugiat ex, aliquet pellentesque sapien. Curabitur vitae accumsan ipsum, vitae pulvinar nisi. Integer vulputate dui lectus, at tristique ipsum aliquet ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti.
              Duis eu interdum metus. Vivamus eget nunc sed nibh commodo lobortis vitae finibus elit. Vestibulum vitae risus mauris. Nam et metus metus. Nullam euismod risus turpis, in pretium eros bibendum sed. Nam ac ultrices dui. Mauris odio arcu, imperdiet in tempus sed, malesuada a ligula.
              Ut sed orci sed odio placerat sollicitudin sit amet a ipsum. Aliquam ac eros quis turpis pellentesque fringilla non non nibh. Nulla ac nunc eget lacus tempor porta eu quis nisl. Sed imperdiet blandit tempus. Vestibulum id mi tortor. Proin sit amet turpis faucibus, porttitor magna ut, varius risus. Morbi in suscipit leo.
              Mauris sagittis mi augue, a elementum turpis hendrerit et. Sed mattis consequat nisl ac volutpat. Vestibulum consectetur augue quam, et faucibus libero laoreet a. Integer urna tellus, tempus a molestie quis, tincidunt vel neque. Duis convallis blandit turpis ac semper. Integer hendrerit eros est, in tempus lectus viverra vitae. Morbi nec felis vulputate, ornare velit ut, fermentum mauris. Aliquam nibh metus, pellentesque vitae fermentum sit amet, malesuada ac augue. Morbi ut aliquam mi, nec finibus lacus. Etiam fermentum nulla volutpat accumsan suscipit. Cras sollicitudin, nibh quis commodo interdum, lorem massa convallis ligula, eget dapibus elit dui at arcu.</p>
          </article>
        )
      })}
      
     
    </div>
  );
}

export default App;
