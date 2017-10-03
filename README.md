

### Bootstrap

**Issue**: Adding link to CSS in public/index.html has applied css to ul. </br>
**Resolution**: Added margin:0 to App.css


**Issue**: Setting backgroundImage:`url(${allPlanetsSmall})` inline errors out. </br>
**Resolution**: This was pulled directly from [react docs](https://reactjs.org/docs/dom-elements.html)

```
const divStyle = {
  backgroundImage: 'url(' + allPlanetsSmall + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```
