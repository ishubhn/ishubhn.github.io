var _0x3859=["download","help","getElementById","command","keyup","keyCode","preventDefault","ctrlKey","toLowerCase","indexOf","error","open","https://ishubhn.github.io/resume.pdf","clear","cloneNode","display:block","createElement","div","appendChild","innerHTML",'<span style = "color:#3ffb57">shubham@nagre $</span> ',"push","executed_commands","value","length","scrollingElement","body","scrollTop","scrollHeight","down","startsWith","html","click","#command","focus","about","education","projects","experience","skills","achievements","contact"];!function(c,x){!function(x){for(;--x;)c.push(c.shift())}(++x)}(_0x3859,455);var _0x8c9d=function(c,x){return _0x3859[c-=0]},cmd_list=[],cmd_index=0,available_cmd=[_0x8c9d("0x0"),_0x8c9d("0x1"),_0x8c9d("0x2"),_0x8c9d("0x3"),_0x8c9d("0x4"),_0x8c9d("0x5"),_0x8c9d("0x6"),_0x8c9d("0x7"),_0x8c9d("0x8"),"clear","ls"],cmd=document[_0x8c9d("0x9")](_0x8c9d("0xa"));function run_command(){var c,x=document[_0x8c9d("0x9")]("command"),d=x.value[_0x8c9d("0xf")]();if(""!=d){var e=document[_0x8c9d("0x9")](d);if(available_cmd[_0x8c9d("0x10")](d)<0&&(e=document[_0x8c9d("0x9")](_0x8c9d("0x11"))),d==_0x8c9d("0x7"))window[_0x8c9d("0x12")](_0x8c9d("0x13"),"_blank");else if(d==_0x8c9d("0x14"))return void clear_console();(c=e[_0x8c9d("0x15")](!0)).style=_0x8c9d("0x16")}var _=document[_0x8c9d("0x17")](_0x8c9d("0x18")),n=document[_0x8c9d("0x17")](_0x8c9d("0x18"));_[_0x8c9d("0x19")](n),n[_0x8c9d("0x1a")]=_0x8c9d("0x1b")+d,""!=d&&(_[_0x8c9d("0x19")](c),cmd_list[_0x8c9d("0x1c")](d)),(e=document[_0x8c9d("0x9")](_0x8c9d("0x1d")))[_0x8c9d("0x19")](_),x[_0x8c9d("0x1e")]="",cmd_index=cmd_list[_0x8c9d("0x1f")]-1;var o=document[_0x8c9d("0x20")]||document[_0x8c9d("0x21")];o[_0x8c9d("0x22")]=o[_0x8c9d("0x23")]}function cycle_command(c){"up"===c?cmd_index>0&&(cmd_index-=1):c===_0x8c9d("0x24")&&cmd_index<cmd_list[_0x8c9d("0x1f")]-1&&(cmd_index+=1),document[_0x8c9d("0x9")](_0x8c9d("0xa")).value=cmd_list[cmd_index]}function tab_completion(){var c=document[_0x8c9d("0x9")](_0x8c9d("0xa")),x=c[_0x8c9d("0x1e")];for(index=0;index<available_cmd[_0x8c9d("0x1f")];index++)if(available_cmd[index][_0x8c9d("0x25")](x)){c[_0x8c9d("0x1e")]=available_cmd[index];break}}function clear_console(){document[_0x8c9d("0x9")]("executed_commands")[_0x8c9d("0x1a")]="",document[_0x8c9d("0x9")](_0x8c9d("0xa"))[_0x8c9d("0x1e")]=""}cmd.addEventListener(_0x8c9d("0xb"),function(c){13===c[_0x8c9d("0xc")]?(c[_0x8c9d("0xd")](),run_command()):38===c[_0x8c9d("0xc")]?(c[_0x8c9d("0xd")](),cycle_command("up")):40===c[_0x8c9d("0xc")]?(c.preventDefault(),cycle_command("down")):32===c.keyCode&&c[_0x8c9d("0xe")]&&(c[_0x8c9d("0xd")](),tab_completion())}),$(_0x8c9d("0x26"))[_0x8c9d("0x27")](function(){$(_0x8c9d("0x28"))[_0x8c9d("0x29")]()});