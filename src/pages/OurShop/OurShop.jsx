import { Helmet } from "react-helmet-async"
import ShareMenuBanner from "../../components/ShareMenuBanner/ShareMenuBanner"
import OurShopBanner from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../components/hooks/useMenu";
import ShareCard from "../../components/ShareCard/ShareCard";
// import ShareCard from "../../components/ShareCard/ShareCard";
function OurShop() {
  const [menu] = useMenu()
  console.log(menu)
  const desserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const offered = menu.filter(item => item.category === 'offered')
  const drinks = menu.filter(item => item.category === 'drinks')
  const [tabIndex,setTabIndex] = useState(0)
  return (
    <div>
      <Helmet>
        <title>Our Shop</title>
      </Helmet>
      <ShareMenuBanner heading={`OUR SHOP`} title={`Would you like to try a dish?`} img={OurShopBanner}>
      </ShareMenuBanner>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
    {
    salad.map(item => <ShareCard key={item.id} item={item}></ShareCard>)
   }
    </div>
  
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
    {
    pizza.map(item => <ShareCard key={item.id} item={item}></ShareCard>)
   }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
    {
    soup.map(item => <ShareCard key={item.id} item={item}></ShareCard>)
   }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
    {
    desserts.map(item => <ShareCard key={item.id} item={item}></ShareCard>)
   }
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
    {
    drinks.map(item => <ShareCard key={item.id} item={item}></ShareCard>)
   }
    </div>
  </TabPanel>
</Tabs>
    </div>
  )
}

export default OurShop