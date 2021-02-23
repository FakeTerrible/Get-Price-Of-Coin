import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Main: React.FC = () => {

  axios.defaults.timeout = 5000;
  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get("https://admin.tomars.me/api/getSymbolList?q=")
      .then(res => {
        setData(res.data);
      })
      .catch(e => {
        console.log('error:' + e);
      })
  },[]);

  return (
    <MainAll>
      <MainTop>
        MEDX-SWAP
      </MainTop>
      {data.length !== 0 ? (
        data.map((item)=>(
        <Lab>
          <Coin>
            <Image
            src={item['token_a']['logoURI']}
            />
            <Name>
              {item['token_a']['name']}
            </Name>
            <Price>
              {item['price']+' $ '}
            </Price>
          </Coin>
        </Lab>
        ))
      ) : (
          <div>
            Loading...
          </div>
        )}
    </MainAll>
  )
}

const MainAll = styled.div`
  margin-top: 2em;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #fcb2bf;
`

const MainTop = styled.div`
  width: 100%;
  height: 40px;
  font-size: 25px; 
  text-align: left;
  line-height: 40px;
  border: 1px solid #511e78;
`

const Lab = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  font-size: 20px;
  line-height: 80px;
  border: 1px solid #8b2f97;
`

const Coin = styled.div`
   display: flex;
   margin-left: 100px;
   width: 800px;
   height: 80px;
   justify-content: space-between;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 40px;
  height: 40px;
`;


const Name = styled.div`
  margin-left: 10px;
`
const Price = styled.div`
  margin-left: 100px;
  color: #1c0c59;
`

export default Main;