// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc4 = stdlib.T_Object({
    amount_raised: ctc0,
    owner: ctc1,
    project_desc: ctc2,
    project_name: ctc3,
    raise_amount: ctc0
    });
  return {
    notify: {
      send: [ctc4]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc4 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc0,
    project_desc: ctc2,
    project_name: ctc3,
    raise_amount: ctc1
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc4
    });
  const map0_ctc = ctc6;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0, ctc4, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc7,
    raiser_fetch0_62: ctc9,
    raiser_raiseFund0_62: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v404, time: v403, didSend: v23, from: v402 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v404, time: v403, didSend: v23, from: v402 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.notify(), {
    at: './index.rsh:41:20:application',
    fs: ['at ./index.rsh:41:20:application call to [unknown function] (defined at: ./index.rsh:41:20:function exp)', 'at ./index.rsh:41:20:application call to "liftedInteract" (defined at: ./index.rsh:41:20:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v402],
    evt_cnt: 0,
    funcNum: 1,
    lct: v403,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v408, time: v407, didSend: v32, from: v406 } = txn2;
      
      ;
      const v411 = '                                                                                                                                                                                                                                                                                        ';
      const v412 = '            ';
      const v413 = {
        amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        owner: v406,
        project_desc: v411,
        project_name: v412,
        raise_amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v420 = v407;
      const v427 = stdlib.checkedBigNumberify('./index.rsh:37:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v402,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v408, time: v407, didSend: v32, from: v406 } = txn2;
  ;
  const v409 = stdlib.addressEq(v402, v406);
  stdlib.assert(v409, {
    at: './index.rsh:42:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v411 = '                                                                                                                                                                                                                                                                                        ';
  const v412 = '            ';
  const v413 = {
    amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    owner: v406,
    project_desc: v411,
    project_name: v412,
    raise_amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v420 = v407;
  let v427 = stdlib.checkedBigNumberify('./index.rsh:37:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v492], secs: v494, time: v493, didSend: v297, from: v491 } = txn3;
    switch (v492[0]) {
      case 'raiser_addToFund0_62': {
        const v495 = v492[1];
        undefined /* setApiDetails */;
        const v501 = v495[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '1')];
        const v509 = stdlib.safeAdd(v427, v501);
        ;
        const v511 = v495[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '0')];
        const v513 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v511), null);
        const v517 = stdlib.fromSome(v513, v413);
        const v518 = v517.amount_raised;
        const v520 = v517.owner;
        const v521 = v517.project_desc;
        const v522 = v517.project_name;
        const v523 = v517.raise_amount;
        const v524 = stdlib.safeAdd(v518, v501);
        const v525 = {
          amount_raised: v524,
          owner: v520,
          project_desc: v521,
          project_name: v522,
          raise_amount: v523
          };
        await stdlib.mapSet(map0, v511, v525);
        const v526 = null;
        await txn3.getOutput('raiser_addToFund', 'v526', ctc0, v526);
        const cv420 = v493;
        const cv427 = v509;
        
        v420 = cv420;
        v427 = cv427;
        
        continue;
        break;
        }
      case 'raiser_fetch0_62': {
        const v583 = v492[1];
        undefined /* setApiDetails */;
        ;
        const v625 = v583[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
        const v626 = {
          None: 0,
          Some: 1
          }[v625[0]];
        const v627 = stdlib.eq(v626, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v628 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v491), null);
        const v632 = stdlib.fromSome(v628, v413);
        const v633 = stdlib.fromSome(v625, v402);
        const v634 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v633), null);
        const v638 = stdlib.fromSome(v634, v413);
        const v639 = v627 ? v632 : v638;
        await txn3.getOutput('raiser_fetch', 'v639', ctc5, v639);
        const cv420 = v493;
        const cv427 = v427;
        
        v420 = cv420;
        v427 = cv427;
        
        continue;
        break;
        }
      case 'raiser_raiseFund0_62': {
        const v671 = v492[1];
        undefined /* setApiDetails */;
        ;
        const v743 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '0')];
        const v744 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '1')];
        const v745 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '2')];
        const v746 = {
          amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          owner: v491,
          project_desc: v744,
          project_name: v743,
          raise_amount: v745
          };
        await stdlib.mapSet(map0, v491, v746);
        null;
        const v748 = true;
        await txn3.getOutput('raiser_raiseFund', 'v748', ctc12, v748);
        const cv420 = v493;
        const cv427 = v427;
        
        v420 = cv420;
        v427 = cv427;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function _raiser_addToFund4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _raiser_addToFund4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _raiser_addToFund4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc7,
    raiser_fetch0_62: ctc9,
    raiser_raiseFund0_62: ctc10
    });
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v402, v413, v427] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc5, ctc1]);
  const v453 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_addToFund0_62" (defined at: ./index.rsh:81:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'in',
    who: 'raiser_addToFund'
    });
  const v455 = v453[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v464 = ['raiser_addToFund0_62', v453];
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v413, v427, v464],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v455, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v492], secs: v494, time: v493, didSend: v297, from: v491 } = txn1;
      
      switch (v492[0]) {
        case 'raiser_addToFund0_62': {
          const v495 = v492[1];
          sim_r.txns.push({
            kind: 'api',
            who: "raiser_addToFund"
            });
          const v501 = v495[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '1')];
          const v509 = stdlib.safeAdd(v427, v501);
          sim_r.txns.push({
            amt: v501,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v511 = v495[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '0')];
          const v513 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v511), null);
          const v517 = stdlib.fromSome(v513, v413);
          const v518 = v517.amount_raised;
          const v520 = v517.owner;
          const v521 = v517.project_desc;
          const v522 = v517.project_name;
          const v523 = v517.raise_amount;
          const v524 = stdlib.safeAdd(v518, v501);
          const v525 = {
            amount_raised: v524,
            owner: v520,
            project_desc: v521,
            project_name: v522,
            raise_amount: v523
            };
          await stdlib.simMapSet(sim_r, 0, v511, v525);
          const v526 = null;
          const v527 = await txn1.getOutput('raiser_addToFund', 'v526', ctc0, v526);
          
          const v1066 = v509;
          sim_r.isHalt = false;
          
          break;
          }
        case 'raiser_fetch0_62': {
          const v583 = v492[1];
          
          break;
          }
        case 'raiser_raiseFund0_62': {
          const v671 = v492[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v492], secs: v494, time: v493, didSend: v297, from: v491 } = txn1;
  switch (v492[0]) {
    case 'raiser_addToFund0_62': {
      const v495 = v492[1];
      undefined /* setApiDetails */;
      const v501 = v495[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '1')];
      const v509 = stdlib.safeAdd(v427, v501);
      ;
      const v511 = v495[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '0')];
      const v513 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v511), null);
      const v517 = stdlib.fromSome(v513, v413);
      const v518 = v517.amount_raised;
      const v520 = v517.owner;
      const v521 = v517.project_desc;
      const v522 = v517.project_name;
      const v523 = v517.raise_amount;
      const v524 = stdlib.safeAdd(v518, v501);
      const v525 = {
        amount_raised: v524,
        owner: v520,
        project_desc: v521,
        project_name: v522,
        raise_amount: v523
        };
      await stdlib.mapSet(map0, v511, v525);
      const v526 = null;
      const v527 = await txn1.getOutput('raiser_addToFund', 'v526', ctc0, v526);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v495, v527), {
          at: './index.rsh:82:7:application',
          fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:96:10:application call to "k" (defined at: ./index.rsh:87:22:function exp)', 'at ./index.rsh:87:22:application call to [unknown function] (defined at: ./index.rsh:87:22:function exp)'],
          msg: 'out',
          who: 'raiser_addToFund'
          });
        }
      else {
        }
      
      const v1066 = v509;
      return;
      
      break;
      }
    case 'raiser_fetch0_62': {
      const v583 = v492[1];
      return;
      break;
      }
    case 'raiser_raiseFund0_62': {
      const v671 = v492[1];
      return;
      break;
      }
    }
  
  
  };
export async function _raiser_fetch4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _raiser_fetch4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _raiser_fetch4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc9,
    raiser_fetch0_62: ctc8,
    raiser_raiseFund0_62: ctc10
    });
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v402, v413, v427] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc5, ctc1]);
  const v468 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:102:11:application call to [unknown function] (defined at: ./index.rsh:102:11:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_fetch0_62" (defined at: ./index.rsh:100:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'in',
    who: 'raiser_fetch'
    });
  const v480 = ['raiser_fetch0_62', v468];
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v413, v427, v480],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v492], secs: v494, time: v493, didSend: v297, from: v491 } = txn1;
      
      switch (v492[0]) {
        case 'raiser_addToFund0_62': {
          const v495 = v492[1];
          
          break;
          }
        case 'raiser_fetch0_62': {
          const v583 = v492[1];
          sim_r.txns.push({
            kind: 'api',
            who: "raiser_fetch"
            });
          ;
          const v625 = v583[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
          const v626 = {
            None: 0,
            Some: 1
            }[v625[0]];
          const v627 = stdlib.eq(v626, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v628 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v491), null);
          const v632 = stdlib.fromSome(v628, v413);
          const v633 = stdlib.fromSome(v625, v402);
          const v634 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v633), null);
          const v638 = stdlib.fromSome(v634, v413);
          const v639 = v627 ? v632 : v638;
          const v640 = await txn1.getOutput('raiser_fetch', 'v639', ctc5, v639);
          
          const v1074 = v427;
          sim_r.isHalt = false;
          
          break;
          }
        case 'raiser_raiseFund0_62': {
          const v671 = v492[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v492], secs: v494, time: v493, didSend: v297, from: v491 } = txn1;
  switch (v492[0]) {
    case 'raiser_addToFund0_62': {
      const v495 = v492[1];
      return;
      break;
      }
    case 'raiser_fetch0_62': {
      const v583 = v492[1];
      undefined /* setApiDetails */;
      ;
      const v625 = v583[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
      const v626 = {
        None: 0,
        Some: 1
        }[v625[0]];
      const v627 = stdlib.eq(v626, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v628 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v491), null);
      const v632 = stdlib.fromSome(v628, v413);
      const v633 = stdlib.fromSome(v625, v402);
      const v634 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v633), null);
      const v638 = stdlib.fromSome(v634, v413);
      const v639 = v627 ? v632 : v638;
      const v640 = await txn1.getOutput('raiser_fetch', 'v639', ctc5, v639);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v583, v640), {
          at: './index.rsh:101:7:application',
          fs: ['at ./index.rsh:101:7:application call to [unknown function] (defined at: ./index.rsh:101:7:function exp)', 'at ./index.rsh:111:10:application call to "k" (defined at: ./index.rsh:106:17:function exp)', 'at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
          msg: 'out',
          who: 'raiser_fetch'
          });
        }
      else {
        }
      
      const v1074 = v427;
      return;
      
      break;
      }
    case 'raiser_raiseFund0_62': {
      const v671 = v492[1];
      return;
      break;
      }
    }
  
  
  };
export async function _raiser_raiseFund4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _raiser_raiseFund4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _raiser_raiseFund4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc8,
    raiser_fetch0_62: ctc10,
    raiser_raiseFund0_62: ctc7
    });
  const ctc12 = stdlib.T_Bool;
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v402, v413, v427] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc5, ctc1]);
  const v430 = ctc.selfAddress();
  const v432 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:59:17:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_raiseFund0_62" (defined at: ./index.rsh:57:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'in',
    who: 'raiser_raiseFund'
    });
  const v440 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v430), null);
  const v441 = {
    None: 0,
    Some: 1
    }[v440[0]];
  const v442 = stdlib.eq(v441, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v442, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:17:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)', 'at ./index.rsh:59:17:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_raiseFund0_62" (defined at: ./index.rsh:57:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'This user already has a fund pending, can only create one',
    who: 'raiser_raiseFund'
    });
  const v449 = ['raiser_raiseFund0_62', v432];
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v413, v427, v449],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v492], secs: v494, time: v493, didSend: v297, from: v491 } = txn1;
      
      switch (v492[0]) {
        case 'raiser_addToFund0_62': {
          const v495 = v492[1];
          
          break;
          }
        case 'raiser_fetch0_62': {
          const v583 = v492[1];
          
          break;
          }
        case 'raiser_raiseFund0_62': {
          const v671 = v492[1];
          sim_r.txns.push({
            kind: 'api',
            who: "raiser_raiseFund"
            });
          ;
          const v743 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '0')];
          const v744 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '1')];
          const v745 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '2')];
          const v746 = {
            amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            owner: v491,
            project_desc: v744,
            project_name: v743,
            raise_amount: v745
            };
          await stdlib.simMapSet(sim_r, 0, v491, v746);
          null;
          const v748 = true;
          const v749 = await txn1.getOutput('raiser_raiseFund', 'v748', ctc12, v748);
          
          const v1082 = v427;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v492], secs: v494, time: v493, didSend: v297, from: v491 } = txn1;
  switch (v492[0]) {
    case 'raiser_addToFund0_62': {
      const v495 = v492[1];
      return;
      break;
      }
    case 'raiser_fetch0_62': {
      const v583 = v492[1];
      return;
      break;
      }
    case 'raiser_raiseFund0_62': {
      const v671 = v492[1];
      undefined /* setApiDetails */;
      ;
      const v743 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '0')];
      const v744 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '1')];
      const v745 = v671[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '2')];
      const v746 = {
        amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        owner: v491,
        project_desc: v744,
        project_name: v743,
        raise_amount: v745
        };
      await stdlib.mapSet(map0, v491, v746);
      null;
      const v748 = true;
      const v749 = await txn1.getOutput('raiser_raiseFund', 'v748', ctc12, v748);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v671, v749), {
          at: './index.rsh:58:7:application',
          fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:7:function exp)', 'at ./index.rsh:76:10:application call to "k" (defined at: ./index.rsh:66:33:function exp)', 'at ./index.rsh:66:33:application call to [unknown function] (defined at: ./index.rsh:66:33:function exp)'],
          msg: 'out',
          who: 'raiser_raiseFund'
          });
        }
      else {
        }
      
      const v1082 = v427;
      return;
      
      break;
      }
    }
  
  
  };
export async function raiser_addToFund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for raiser_addToFund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for raiser_addToFund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _raiser_addToFund4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function raiser_fetch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for raiser_fetch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for raiser_fetch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _raiser_fetch4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function raiser_raiseFund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for raiser_raiseFund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for raiser_raiseFund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _raiser_raiseFund4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`raiser_addToFund(address,uint64)byte[0]`, `raiser_fetch((byte,byte[32]))(uint64,address,byte[280],byte[12],uint64)`, `raiser_raiseFund(byte[12],byte[280],uint64)byte`],
    pure: [],
    sigs: [`raiser_addToFund(address,uint64)byte[0]`, `raiser_fetch((byte,byte[32]))(uint64,address,byte[280],byte[12],uint64)`, `raiser_raiseFund(byte[12],byte[280],uint64)byte`]
    },
  appApproval: `BiANAAEI1AIDBAyYAtUCl5mghA/yj//cDyACJgQBAQEAAQIAIjUAMRhBA6krZEkiWzUBJFs1AjEZIxJBACUxACEIr0sBKUsCVwB/ZksBKEsCV39/ZksBKksCV/5XZkhIQgNbNhoAF0lBAF4iNQQjNQZJIQkMQAA0SSEKDEAAFSEKEkQ2GgE1/yg0/1CBiwKvUEIAUyEJEkQ2GgE2GgJQNhoDUDX/KjT/UEIAO4GpybnNCBJENhoBNhoCUDX/KTT/UIGEAq9QQgAeNhoCFzUENhoDNhoBF0kjDEACRUkhBAxAAf8hBBJEIQU0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A0lJVwAgNf8hCyVYNf6B9AJbNf1JNQU1/IAEwVokCDT8ULA0/CJVSSMMQAEXSSEMDEAAeyEMEkQ0/COBrAJYNfskrzEAUDT7IQYhB1hQNPtXAAxQNPuBpAIkWFA1+jEAMQCIAo0oNPpQNflINPlLASlLAlcAf2ZLAShLAld/f2ZLASpLAlf+V2ZISIAEXGkRhTT6ULCACQAAAAAAAALsAbAoNQc0/zT+MgY0/UIBo0g0/FcBITX7NPs1+oAIAAAAAAAAAn80/jT/NPpJNflXASA0+SJVTYgCGUk1+SMlWDT5IlVNNP4xAIgCB0k1+SMlWDT5IlVNNPoiVSMSTVCwNP40/zT6STX5VwEgNPkiVU2IAd9JNfkjJVg0+SJVTTT+MQCIAc1JNfkjJVg0+SJVTTT6IlUjEk01BzT/NP4yBjT9QgEOSDT8VwEoNfs0+yELWzX6NPqIAbY0+1cAIDX5NP40+YgBjEk19yMlWDT3IlVNNfg0+UmIAXkoNPgiWzT6CBY0+FcIIFA0+IEoIQdYUDT4gcACIQZYUDT4gcwCJFhQUDX3SDT3SwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/ldmSEiACAAAAAAAAAIOsCs1BzT/NP4yBjT9NPoIQgByIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDNf+ABJqLkXSwNP8xABJENP8krzEAUCEHr1AhBq9QJK9QMgYiQgAzSIGgjQaIAOciNAESRDQESSISTDQCEhFEgARfDav6sDEAKUsBVwAgZ0gjNQEyBjUCQgBNNf81/jX9STX8NP1QNP8WUClLAVcAf2coSwFXf39nKksBV/5+Z0ghBTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCEEMTcSRCI1ASI1AkL/rUkxGGFAAAVIIQiviUkpYksBKGJQSwEqYlBMSIk0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 3,
  mapDataSize: 341,
  stateKeys: 3,
  stateSize: 380,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:119:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:53:38:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "raiser_addToFund": raiser_addToFund,
  "raiser_fetch": raiser_fetch,
  "raiser_raiseFund": raiser_raiseFund
  };
export const _APIs = {
  raiser: {
    addToFund: raiser_addToFund,
    fetch: raiser_fetch,
    raiseFund: raiser_raiseFund
    }
  };
