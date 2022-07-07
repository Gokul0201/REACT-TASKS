import {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Headerr';
import Rating from './components/Rating'


function App() {
  const [cartValue,setCartValue]=useState(0);
  const [toggle1,setToggle1]=useState(false);
  const [toggle2,setToggle2]=useState(false);
  const [toggle3,setToggle3]=useState(false);
  const [toggle4,setToggle4]=useState(false);
  const [toggle5,setToggle5]=useState(false);
  const [toggle6,setToggle6]=useState(false);
  const [toggle7,setToggle7]=useState(false);
  const [toggle8,setToggle8]=useState(false);
  

  return <>
    <div>
      <Navigation data={cartValue}/>
      <Header/>
      
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iPhone 13 Pro Max</h5>
                                    Rs. 1,37,000
                                </div>
                              <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle1?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle1((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle1((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>

            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iPhone 13 pro</h5>
                                    Rs. 1,16,000
                                </div>
                                <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle2?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle2((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle2((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>

            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iPhone 13 Mini</h5>
                                    Rs. 72,000
                                </div>
                                <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle3?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle3((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle3((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iPhone 13</h5>
                                    Rs. 80,000
                                </div>
                                <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle4?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle4((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle4((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iphone 12 pro max</h5>
                                    Rs. 1,29,900
                                </div>
                                <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle5?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle5((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle5((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iPhone 12 pro</h5>
                                    Rs. 1,04,000
                                </div>
                                <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle6?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle6((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle6((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iPhone 12</h5>
                                    Rs. 60,900
                                </div>
                                <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle7?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle7((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle7((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">iPhone 12 mini</h5>
                                    Rs. 52,000
                                </div>
                                <div className="d-flex justify-content-center"><Rating/></div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle8?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle8((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle8((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            </div>
          </div>
        </section>
      

      <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
            </div>
        </footer>
    </div>
  </>
}

export default App;