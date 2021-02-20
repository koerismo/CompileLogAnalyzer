const consoletxt = document.getElementById('consoletxt')
const result = document.getElementById('result')

const problems = {
  'Overlay touching too many faces':'Increase the lightmap scale of the brush(es) that the overlay mentioned resides on. ',
  'LoadPortals: couldn\'t read ':'Your map leaked! See <a href="https://developer.valvesoftware.com/wiki/Leak">here</a> for an explanation.',
  'WARNING: Too many light styles on a face at':'Brushes cannot be lit by more than three dynamic lights (meaning lights that are named). Be sure that lights that don\'t turn on/off are not named.',
  'Could not open instance file':'An instance referenced in the map could not be located. Make sure that the file exists!',
  'Error: displacement found on a(n) func_detail entity - not supported':'Displacements can\'t be brush entities. Make sure that it is a world brush! (Press "Move to World")',
  'HashVec: point outside valid range':'Invalid brush! All brushes must be convex.',
  'ParseEpar: key token too long':'Your map contains an incomplete or otherwise problematic connection. Open the problem checker (<code>Alt+P</code>) for a list of possible causes.',
  "Loading .*.vmf\n.*ConVarRef gpu_level doesn't point to an existing ConVar\nFinished. Press a key to close.":'A fatal error occured while building! Open the problem checker (<code>Alt+P</code>) for a list of possible causes.',
  'Brush \\d+: nummapbrushes == MAX_MAP_BRUSHES':'You have reached the maximum number of brushes. If you have a large map, try splitting it into multiple parts.',
  'Brush \\d+: ParseDispInfoChunk: nummapdispinfo > MAX_MAP_DISPINFO':'You have reached the maximum number of displacements. (Unverified reason)',
  'LoadPortals:\\s+reading portal (\\d|.)+(\\n)?Finished\\. Press a key to close\\.':'VVIS failed unexpectedly. Make sure your build programs are configured correctly!'
}


consoletxt.oninput = function() {
  result.innerHTML = evalProblem(consoletxt.value)
}

function evalProblem(val) {
  if (val == '')
    return 'Answers will appear here.'
  var out
  Object.keys(problems).forEach((v,i)=>{
    let rg = new RegExp(v)
    if (rg.test(val)) {
      out = problems[v]
      return
    }
  })
  return out||'No solutions found. Ask a person! (Also report it so we can add it to this tool!)'
}

document.body.classList.add('bodyactive')
