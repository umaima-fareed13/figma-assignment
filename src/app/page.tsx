import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img src={"/banner iphone.png"}/>
        </div>
      </div>
      <div>
        <div>
          <img src={"wide square.png"}/>
        </div>
      </div>
      <div>
        <div className="Banner">
          <img src={"/Big Banner.png"}/>
        </div>
      </div>
      <div>
        <div className="squares">
          <img src={"/squares.png"}/>
        </div>
      </div>
      <div>
        <div className="category">
          <img src={"/category.png"}/>
        </div>
      </div>
      <div>
        <div className="products">
          <img src={"/products.png"}/>
        </div>
      </div>
      <div>
        <div>
          <img src={"/Banners.png"}/>
        </div>
      </div>
      <div>
        <div>
          <img src={"/banner 2.png"}/>
        </div>
      </div>
      <div>
        <div>
          <img src={"/discount products.png"}/>
        </div>
      </div>
      <div>
        <div>
          <img src={"/footer.png"}/>
        </div>
      </div>
    </div>
  )
}