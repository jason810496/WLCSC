<h4 align="center"><a href="https://github.com/jason810496/WLCSC/blob/main/README_zh.md">中文</a></h4>

# WLCSC Website
### Official Website of Wuling Computer Science Club

A static website builded in [React](https://reactjs.org/)

<!-- ## Details of website  -->
### Development & Deployment

( prerequisites : you have to stay in `<APP NAME>/src/` directory )

Start the development server
```sh
npm run start
```
For deployment
```sh
npm run deploy
```
( the script will automatically build current app and deploy it onto Github )

### App Content

All of the website content ( including images ) were written in `index.js`



### App structure 

#### Components 
```
App{
    Header{

    }
    SideBar{
    
    }
    Language{
    
    }
    Main{

    }
    Footer{
        
    }
}
```

#### Routing 

**Package** : [React Router V6](https://reactrouter.com/)

[Document of React HashRouter](https://reactrouter.com/docs/en/v6/routers/hash-router)

As an SPA ( Single Page Application ) , the only way to routing is `Hash Router` . 
( Our members page route is `AppDomain/#/members` , if you want to add a new page ,  such as a course page . The URL of course page would be `AppDomain/#/members`)

Our routing rule were also defined in `index.js` ( It's defined in `render()` method of `App` component at `line 550-600` )


( Read [Nested Route Example in React Router quick turtorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes) first before reading the following code )

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
- `Router` : import `HashRouter` as `Router` in the beginning of file


<a id="Header"></a>

### Header

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

