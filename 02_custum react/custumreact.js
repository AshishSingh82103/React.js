function custumRender(reactElement, container) {
    /* 1st section version -1
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
     2nd section version -2*/
     const domElement = document.createElement(reactElement.type);
     domElement.innerHTML = reactElement.children;
     for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
        container.appendChild(domElement);
     }
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

document.querySelector("#root");
const mainContainer = document.querySelector("#root");

custumRender(reactElement, mainContainer);

document.querySelector("#root");
const mainBox = document.querySelector('#root');

custumRender1(reactElement1, reactElement3);




