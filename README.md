

### Bootstrap

**Issues**: 

**Issue**: Adding link to CSS in public/index.html has applied css to ul.<\br>
**Resolution**: Added margin:0 to App.css


**Issue**: Setting backgroundImage:`url(${allPlanetsSmall})` errors out 
**Resolution**: This was pulled directly from [react docs](https://reactjs.org/docs/dom-elements.html)

```
const divStyle = {
  backgroundImage: 'url(' + allPlanetsSmall + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```


**Issue**: Trying to center the backgroundImage horizonally
