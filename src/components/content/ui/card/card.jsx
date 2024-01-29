import pic from './man.jpeg'
import pic1 from './pic2.jpg'
import pic2 from './pic3.jpg'
import pic3 from './pıc4.jpg'
import pic4 from './pic5.jpg'
import pic6 from './signer.jpg'
import pic7 from './pic8.jpg'

import { FaRegHeart } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";

import * as Styled from './card.styles.js'


export const Card = () => {
  return (
      <>
          <Styled.Card>
              <Styled.Image>
                  <img src={pic} alt=""/>
              </Styled.Image>
              <Styled.Footer>
                  <Styled.UserInfo>
                      <Styled.UserPhoto>
                          <img src={`https://i.pravatar.cc/100`} alt=""/>
                      </Styled.UserPhoto>
                      <h4>Sam Kuk</h4>
                  </Styled.UserInfo>
                  <Styled.CardAction>
                      <FaRegHeart/>
                      <LuMessageSquare />
                  </Styled.CardAction>
              </Styled.Footer>
          </Styled.Card>
          <Styled.Card>
              <Styled.Image>
                  <img src={pic1} alt=""/>
              </Styled.Image>
              <Styled.Footer>
                  <Styled.UserInfo>
                      <Styled.UserPhoto>
                          <img src={`https://i.pravatar.cc/101`} alt=""/>
                      </Styled.UserPhoto>
                      <h4>Sam Kuk</h4>
                  </Styled.UserInfo>
                  <Styled.CardAction>
                      <FaRegHeart/>
                      <LuMessageSquare />
                  </Styled.CardAction>
              </Styled.Footer>
          </Styled.Card>
          <Styled.Card>
              <Styled.Image>
                  <img src={pic2} alt=""/>
              </Styled.Image>
              <Styled.Footer>
                  <Styled.UserInfo>
                      <Styled.UserPhoto>
                          <img src={`https://i.pravatar.cc/102`} alt=""/>
                      </Styled.UserPhoto>
                      <h4>Sam Kuk</h4>
                  </Styled.UserInfo>
                  <Styled.CardAction>
                      <FaRegHeart/>
                      <LuMessageSquare />
                  </Styled.CardAction>
              </Styled.Footer>
          </Styled.Card>
          <Styled.Card>
              <Styled.Image>
                  <img src={pic3} alt=""/>
              </Styled.Image>
              <Styled.Footer>
                  <Styled.UserInfo>
                      <Styled.UserPhoto>
                          <img src={`https://i.pravatar.cc/103`} alt=""/>
                      </Styled.UserPhoto>
                      <h4>Sam Kuk</h4>
                  </Styled.UserInfo>
                  <Styled.CardAction>
                      <FaRegHeart/>
                      <LuMessageSquare />
                  </Styled.CardAction>
              </Styled.Footer>
          </Styled.Card>
          <Styled.Card>
              <Styled.Image>
                  <img src={pic4} alt=""/>
              </Styled.Image>
              <Styled.Footer>
                  <Styled.UserInfo>
                      <Styled.UserPhoto>
                          <img src={`https://i.pravatar.cc/104`} alt=""/>
                      </Styled.UserPhoto>
                      <h4>Sam Kuk</h4>
                  </Styled.UserInfo>
                  <Styled.CardAction>
                      <FaRegHeart/>
                      <LuMessageSquare />
                  </Styled.CardAction>
              </Styled.Footer>
          </Styled.Card>
          <Styled.Card>
              <Styled.Image>
                  <img src={pic6} alt=""/>
              </Styled.Image>
              <Styled.Footer>
                  <Styled.UserInfo>
                      <Styled.UserPhoto>
                          <img src={`https://i.pravatar.cc/105`} alt=""/>
                      </Styled.UserPhoto>
                      <h4>Sam Kuk</h4>
                  </Styled.UserInfo>
                  <Styled.CardAction>
                      <FaRegHeart/>
                      <LuMessageSquare />
                  </Styled.CardAction>
              </Styled.Footer>
          </Styled.Card>
          <Styled.Card>
              <Styled.Image>
                  <img src={pic7} alt=""/>
              </Styled.Image>
              <Styled.Footer>
                  <Styled.UserInfo>
                      <Styled.UserPhoto>
                          <img src={`https://i.pravatar.cc/106`} alt=""/>
                      </Styled.UserPhoto>
                      <h4>Sam Kuk</h4>
                  </Styled.UserInfo>
                  <Styled.CardAction>
                      <FaRegHeart/>
                      <LuMessageSquare />
                  </Styled.CardAction>
              </Styled.Footer>
          </Styled.Card>
      </>
  )
}