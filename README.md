# Getting Started with Create React App

Please execute commands below after you pull down this project to your local.

npm install

npm install axios

npm start

### 執行dockerfile 創建image
# docker build -f ./dockerfile.hov -t hov_fe_img:1.0 .

### 創建容器
# docker run -d -p 3000:3000 --name hov_fe hov_fe_img:1.0



### 情境記錄處:
測試docker架設前後端分離場景，本次採了一個坑，前端在call BE時，使用BE容器IP為172.17.0.3:8099，衍生了些問題。 
FE容器: 負責前端服務 172.17.0.2:3000  映射到localhost:3000
BE容器: 負責後端服務 172.17.0.3:8099  映射到localhost:8099
local: 指本地端的使用者 192.168.2.1

Q1: 當使用者使用了前端服務，開啟UI，點擊按鈕，觸發了axios，想想這時，請求是由誰發起的? 是user端? 還是FE容器?
若為user端，則請求發起的IP為user 端IP； 如為FE容器端，則請求發的IP為容器IP?
問題再擴大思考，平時使用訂票網頁(假設為前後端分離)，我們請求的資源，對後端來說，來源是user端，還是前端server?

A1:  當user點擊UI時，所發起請求來源是user端，故若後端API設為 http://172.17.0.3...， 即表示 192.168.2.1直接呼叫172.17.0.3的資源，這導致user端找不到BE資源，因為172.17.0.3容器內的IP，只有再容器內同網段，才能存取成功。



## -----------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
