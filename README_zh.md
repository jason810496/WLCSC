<h4 align="center"><a href="https://github.com/jason810496/WLCSC/blob/main/README.md">English</a></h4>

# 武陵資研網站
## 武陵高中資訊研究社官方網站

一個用 [React](https://reactjs.org/) 寫的靜態網站

<!-- ## Details of website  -->
## 改善社網

**技能要求：**
- git & github ( 會發 PR 即可 )
- basic js
- React class component
- React function component 

**Todo：**
- [] 完成 `PageNotFound` 元件
    目前 `PageNotFound`元件定義在`index.js`的`App`元件中
- [] 整理 CSS
    目前所有的 CSS 都寫在通一個檔案 ，可以考慮寫成 Object Oriented CSS

- [] 優化 RWD
    把 CSS breakpoint 改好一點

- [] 增加新的頁面（ Route ） 
    Eg: 可以增加關於課程的頁面，介紹更詳細的內容

## 開發測試 & 部屬

( 前提 : 必須位於 `<APP NAME>/src/` 這個目錄 )

在 local 啟動 App
```sh
npm run start
```
部屬當前 App
```sh
npm run deploy
```
( 這會自動 build 當前的 App , 並部屬到 Github )

## 網站內容

網站的所有內容（包括圖片）都寫在 `index.js` 中

## App 架構

App 的整體架構大概如下所示 ： 
```
App{
    Header{

    }
    SideBar{
    
    }
    Language{
    
    }
    PageContent{

    }
    Footer{
        
    }
}
```

**基本元件**
- Header : 包括左上的 Logo ， 電腦裝置才會顯示的中央導覽列 ，右上的主題接換 
- SiderBar : 在行動裝置才會顯示的側導覽列
- Language : 區換語言 ， 位在 Header 左上 ， 但是沒有寫入 header 元件中
- Footer : 包括社團的其他連結和 copyright 

**頁面元件**
- PageContent :網頁中主要的內容
### Components

#### App

`App` 元件架構如下 ： 
```js
class App extends React.Component {
    constructor ( props ){
        super( props );
        this.state = {
            IsDark : 1,
            Lang :0,
        };
    }

    handleTheme(){
        if( this.state.IsDark===1 ){
            this.setState( {IsDark : 0} );
        }
        else this.setState( {IsDark : 1} );
    }

    handleLang(){
        if( this.state.Lang===1 ){
            this.setState( {Lang : 0} );
        }
        else this.setState( {Lang : 1} );
    }

    HomePage =() =>{
        
    }

    MembersPage = ()=>{

    }

    NotFoundPage = ()=>{

    }

    render(){

    }
}
```

**功能：**
1. 切換主題：

    主要透過 `state` 中的 `IsDark` 來切換 ， 並搭配 CSS （ 透過將最外層的 div 的 className 設定為 `Dark` 或 `Light` ， 就可以透過 CSS 來達到切換主題的效果： 如 `.Dark .obj{ ... }` 或 `.Light .obj{ ... }` ）
2. 切換語言：

    可以注意到 `state` 中的 `Lang` 是在 `0` 與 `1` 做變換 ， 再搭配 `content` array（  存所有網頁內容的 array , `content[0]` 是英文內容 ， `content[1]` 是中文內容 ， 恰好可以搭配 `state.Lang` 做內容的切換 （ 並且 `state.Lang` 狀態會傳入其他更小的元件中，一層一層傳入 ）
 
#### MainPage
社團網站首頁
#### MemberPage
成員頁面
####


### Routing 

**Package** : [React Router V6](https://reactrouter.com/)

[React HashRouter 的文件](https://reactrouter.com/docs/en/v6/routers/hash-router)

因為我們網站是 SPA （一頁式網站），所以唯一一個可以達成 routing 的方式是 `Hash Router`
( 成員頁面的 route 是 `AppDomain/#/members` ， 假設你想要增加一個新頁面 ， 以課程頁面為例 ， 那課程頁面的 URL 會是 `AppDomain/#/members` )

Routing 規則同樣也定義在 `index.js` ( 被定義在 `App` 元件的 `render()` 方法 , 約在 `line 550-600` )

( 在看以下 code 前，請先閱讀 [Nested Route 在 React Router 快速教學中的範例](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes) )

```js
<div className={ ( this.state.IsDark===1? DARK:LIGHT )+'App'}>
                <Language callback={ ()=>this.handleLang() } />

                <Router>
                    <Routes>
                        <Route path='*' element={ < this.NotFoundPage/>}/>

                        <Route path="/">
                            <Route index element={ <this.HomePage/> } />
                            <Route path="members" element={ <this.MembersPage/> } />
                        </Route>
                        
                    </Routes>
                </Router>

                <Footer SocialLinksList={ SocialLinksList }/>
            </div>
```

可以看不論是哪個 route ， `Language` 和 `Footer` 都會顯示在頁面中 （ 因為他們並沒有包在 `Router` 中 ）
而`AppDomain/`(根目錄)會 render `App.HomePage` 這個元件，而`AppDomain/#/members`則是顯示成員頁面。而`<Route path='*' element={ < this.NotFoundPage/>}/>`這個 path 處理所有不合的 route （ 可以當作 `404 Page` ， 如用戶想連至 `AppDomain/#/cool` 這個 route 就會顯示 `NotFoundPage` 的內容 ，因為沒有 `cool` 這個 route ） 

<a id="Header"></a>

#### Header

Header structure : 
```
Header{
    Logo{
    
    }
    Buttons{
    
    }
    Chnage{
    
    }
}
```

import `Header` components in `index.js`
```javascript
import Header from './components/Header/Header';
```

#### Logo
the top-left Logo link in Header 

#### Buttons
the top navigation bar in Header 

#### Change
the theme toggle switch in Header 


### Reference 

