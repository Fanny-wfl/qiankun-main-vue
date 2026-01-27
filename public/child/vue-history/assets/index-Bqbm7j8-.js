const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/AboutView-keVwyc8A.js', 'assets/AboutView-DhlS7raN.css']),
) => i.map((i) => d[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const i = {}
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const i = n(r)
    fetch(r.href, i)
  }
})()
function as(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const X = {},
  St = [],
  je = () => {},
  Ir = () => !1,
  Rn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ds = (e) => e.startsWith('onUpdate:'),
  oe = Object.assign,
  hs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  so = Object.prototype.hasOwnProperty,
  q = (e, t) => so.call(e, t),
  B = Array.isArray,
  Ct = (e) => An(e) === '[object Map]',
  Tr = (e) => An(e) === '[object Set]',
  j = (e) => typeof e == 'function',
  se = (e) => typeof e == 'string',
  ft = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  Nr = (e) => (Z(e) || j(e)) && j(e.then) && j(e.catch),
  Mr = Object.prototype.toString,
  An = (e) => Mr.call(e),
  ro = (e) => An(e).slice(8, -1),
  Dr = (e) => An(e) === '[object Object]',
  ps = (e) => se(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Gt = as(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  wn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  io = /-\w/g,
  ct = wn((e) => e.replace(io, (t) => t.slice(1).toUpperCase())),
  oo = /\B([A-Z])/g,
  vt = wn((e) => e.replace(oo, '-$1').toLowerCase()),
  Lr = wn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Mn = wn((e) => (e ? `on${Lr(e)}` : '')),
  lt = (e, t) => !Object.is(e, t),
  Dn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Fr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  lo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Bs
const Sn = () =>
  Bs ||
  (Bs =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function gs(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = se(s) ? ao(s) : gs(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (se(e) || Z(e)) return e
}
const co = /;(?![^(]*\))/g,
  uo = /:([^]+)/,
  fo = /\/\*[^]*?\*\//g
function ao(e) {
  const t = {}
  return (
    e
      .replace(fo, '')
      .split(co)
      .forEach((n) => {
        if (n) {
          const s = n.split(uo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function ms(e) {
  let t = ''
  if (se(e)) t = e
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = ms(e[n])
      s && (t += s + ' ')
    }
  else if (Z(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const ho = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  po = as(ho)
function Hr(e) {
  return !!e || e === ''
}
const Br = (e) => !!(e && e.__v_isRef === !0),
  jr = (e) =>
    se(e)
      ? e
      : e == null
        ? ''
        : B(e) || (Z(e) && (e.toString === Mr || !j(e.toString)))
          ? Br(e)
            ? jr(e.value)
            : JSON.stringify(e, Vr, 2)
          : String(e),
  Vr = (e, t) =>
    Br(t)
      ? Vr(e, t.value)
      : Ct(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Ln(s, i) + ' =>'] = r), n),
              {},
            ),
          }
        : Tr(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ln(n)) }
          : ft(t)
            ? Ln(t)
            : Z(t) && !B(t) && !Dr(t)
              ? String(t)
              : t,
  Ln = (e, t = '') => {
    var n
    return ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let _e
class Ur {
  constructor(t = !1) {
    ;((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = _e),
      !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(this) - 1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = _e
      try {
        return ((_e = this), t())
      } finally {
        _e = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = _e), (_e = this))
  }
  off() {
    this._on > 0 && --this._on === 0 && ((_e = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function go(e) {
  return new Ur(e)
}
function mo() {
  return _e
}
let J
const Fn = new WeakSet()
class Wr {
  constructor(t) {
    ;((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      _e && _e.active && _e.effects.push(this))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Fn.has(this) && (Fn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Kr(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), js(this), kr(this))
    const t = J,
      n = we
    ;((J = this), (we = !0))
    try {
      return this.fn()
    } finally {
      ;(qr(this), (J = t), (we = n), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ys(t)
      ;((this.deps = this.depsTail = void 0),
        js(this),
        this.onStop && this.onStop(),
        (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64 ? Fn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Qn(this) && this.run()
  }
  get dirty() {
    return Qn(this)
  }
}
let Gr = 0,
  Kt,
  kt
function Kr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;((e.next = kt), (kt = e))
    return
  }
  ;((e.next = Kt), (Kt = e))
}
function _s() {
  Gr++
}
function vs() {
  if (--Gr > 0) return
  if (kt) {
    let t = kt
    for (kt = void 0; t; ) {
      const n = t.next
      ;((t.next = void 0), (t.flags &= -9), (t = n))
    }
  }
  let e
  for (; Kt; ) {
    let t = Kt
    for (Kt = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function kr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t))
}
function qr(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    ;(s.version === -1 ? (s === n && (n = r), ys(s), _o(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r))
  }
  ;((e.deps = t), (e.depsTail = n))
}
function Qn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && ($r(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function $r(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Jt) ||
    ((e.globalVersion = Jt), !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Qn(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = J,
    s = we
  ;((J = e), (we = !0))
  try {
    kr(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || lt(r, e._value)) && ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;((J = n), (we = s), qr(e), (e.flags &= -3))
  }
}
function ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) ys(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function _o(e) {
  const { prevDep: t, nextDep: n } = e
  ;(t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0)))
}
let we = !0
const Qr = []
function Qe() {
  ;(Qr.push(we), (we = !1))
}
function ze() {
  const e = Qr.pop()
  we = e === void 0 ? !0 : e
}
function js(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = J
    J = void 0
    try {
      t()
    } finally {
      J = n
    }
  }
}
let Jt = 0
class vo {
  constructor(t, n) {
    ;((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0))
  }
}
class bs {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {
    if (!J || !we || J === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== J)
      ((n = this.activeLink = new vo(J, this)),
        J.deps
          ? ((n.prevDep = J.depsTail), (J.depsTail.nextDep = n), (J.depsTail = n))
          : (J.deps = J.depsTail = n),
        zr(n))
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = J.depsTail),
        (n.nextDep = void 0),
        (J.depsTail.nextDep = n),
        (J.depsTail = n),
        J.deps === n && (J.deps = s))
    }
    return n
  }
  trigger(t) {
    ;(this.version++, Jt++, this.notify(t))
  }
  notify(t) {
    _s()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      vs()
    }
  }
}
function zr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) zr(s)
    }
    const n = e.dep.subs
    ;(n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e))
  }
}
const zn = new WeakMap(),
  _t = Symbol(''),
  Yn = Symbol(''),
  Xt = Symbol('')
function le(e, t, n) {
  if (we && J) {
    let s = zn.get(e)
    s || zn.set(e, (s = new Map()))
    let r = s.get(n)
    ;(r || (s.set(n, (r = new bs())), (r.map = s), (r.key = n)), r.track())
  }
}
function ke(e, t, n, s, r, i) {
  const o = zn.get(e)
  if (!o) {
    Jt++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((_s(), t === 'clear')) o.forEach(l)
  else {
    const c = B(e),
      d = c && ps(n)
    if (c && n === 'length') {
      const f = Number(s)
      o.forEach((h, g) => {
        ;(g === 'length' || g === Xt || (!ft(g) && g >= f)) && l(h)
      })
    } else
      switch (((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Xt)), t)) {
        case 'add':
          c ? d && l(o.get('length')) : (l(o.get(_t)), Ct(e) && l(o.get(Yn)))
          break
        case 'delete':
          c || (l(o.get(_t)), Ct(e) && l(o.get(Yn)))
          break
        case 'set':
          Ct(e) && l(o.get(_t))
          break
      }
  }
  vs()
}
function xt(e) {
  const t = k(e)
  return t === e ? t : (le(t, 'iterate', Xt), Se(e) ? t : t.map(Ye))
}
function Es(e) {
  return (le((e = k(e)), 'iterate', Xt), e)
}
function nt(e, t) {
  return ut(e) ? Zt(Ot(e) ? Ye(t) : t) : Ye(t)
}
const yo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hn(this, Symbol.iterator, (e) => nt(this, e))
  },
  concat(...e) {
    return xt(this).concat(...e.map((t) => (B(t) ? xt(t) : t)))
  },
  entries() {
    return Hn(this, 'entries', (e) => ((e[1] = nt(this, e[1])), e))
  },
  every(e, t) {
    return We(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return We(this, 'filter', e, t, (n) => n.map((s) => nt(this, s)), arguments)
  },
  find(e, t) {
    return We(this, 'find', e, t, (n) => nt(this, n), arguments)
  },
  findIndex(e, t) {
    return We(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return We(this, 'findLast', e, t, (n) => nt(this, n), arguments)
  },
  findLastIndex(e, t) {
    return We(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return We(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return Bn(this, 'includes', e)
  },
  indexOf(...e) {
    return Bn(this, 'indexOf', e)
  },
  join(e) {
    return xt(this).join(e)
  },
  lastIndexOf(...e) {
    return Bn(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return We(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Bt(this, 'pop')
  },
  push(...e) {
    return Bt(this, 'push', e)
  },
  reduce(e, ...t) {
    return Vs(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return Vs(this, 'reduceRight', e, t)
  },
  shift() {
    return Bt(this, 'shift')
  },
  some(e, t) {
    return We(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Bt(this, 'splice', e)
  },
  toReversed() {
    return xt(this).toReversed()
  },
  toSorted(e) {
    return xt(this).toSorted(e)
  },
  toSpliced(...e) {
    return xt(this).toSpliced(...e)
  },
  unshift(...e) {
    return Bt(this, 'unshift', e)
  },
  values() {
    return Hn(this, 'values', (e) => nt(this, e))
  },
}
function Hn(e, t, n) {
  const s = Es(e),
    r = s[t]()
  return (
    s !== e &&
      !Se(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return (i.done || (i.value = n(i.value)), i)
      })),
    r
  )
}
const bo = Array.prototype
function We(e, t, n, s, r, i) {
  const o = Es(e),
    l = o !== e && !Se(e),
    c = o[t]
  if (c !== bo[t]) {
    const h = c.apply(e, i)
    return l ? Ye(h) : h
  }
  let d = n
  o !== e &&
    (l
      ? (d = function (h, g) {
          return n.call(this, nt(e, h), g, e)
        })
      : n.length > 2 &&
        (d = function (h, g) {
          return n.call(this, h, g, e)
        }))
  const f = c.call(o, d, s)
  return l && r ? r(f) : f
}
function Vs(e, t, n, s) {
  const r = Es(e)
  let i = n
  return (
    r !== e &&
      (Se(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, nt(e, l), c, e)
          })),
    r[t](i, ...s)
  )
}
function Bn(e, t, n) {
  const s = k(e)
  le(s, 'iterate', Xt)
  const r = s[t](...n)
  return (r === -1 || r === !1) && As(n[0]) ? ((n[0] = k(n[0])), s[t](...n)) : r
}
function Bt(e, t, n = []) {
  ;(Qe(), _s())
  const s = k(e)[t].apply(e, n)
  return (vs(), ze(), s)
}
const Eo = as('__proto__,__v_isRef,__isVue'),
  Yr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(ft),
  )
function xo(e) {
  ft(e) || (e = String(e))
  const t = k(this)
  return (le(t, 'has', e), t.hasOwnProperty(e))
}
class Jr {
  constructor(t = !1, n = !1) {
    ;((this._isReadonly = t), (this._isShallow = n))
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? No : ti) : i ? ei : Zr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = B(t)
    if (!r) {
      let c
      if (o && (c = yo[n])) return c
      if (n === 'hasOwnProperty') return xo
    }
    const l = Reflect.get(t, n, ce(t) ? t : s)
    if ((ft(n) ? Yr.has(n) : Eo(n)) || (r || le(t, 'get', n), i)) return l
    if (ce(l)) {
      const c = o && ps(n) ? l : l.value
      return r && Z(c) ? Xn(c) : c
    }
    return Z(l) ? (r ? Xn(l) : Cn(l)) : l
  }
}
class Xr extends Jr {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    const o = B(t) && ps(n)
    if (!this._isShallow) {
      const d = ut(i)
      if ((!Se(s) && !ut(s) && ((i = k(i)), (s = k(s))), !o && ce(i) && !ce(s)))
        return (d || (i.value = s), !0)
    }
    const l = o ? Number(n) < t.length : q(t, n),
      c = Reflect.set(t, n, s, ce(t) ? t : r)
    return (t === k(r) && (l ? lt(s, i) && ke(t, 'set', n, s) : ke(t, 'add', n, s)), c)
  }
  deleteProperty(t, n) {
    const s = q(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return (r && s && ke(t, 'delete', n, void 0), r)
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return ((!ft(n) || !Yr.has(n)) && le(t, 'has', n), s)
  }
  ownKeys(t) {
    return (le(t, 'iterate', B(t) ? 'length' : _t), Reflect.ownKeys(t))
  }
}
class Ro extends Jr {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Ao = new Xr(),
  wo = new Ro(),
  So = new Xr(!0)
const Jn = (e) => e,
  cn = (e) => Reflect.getPrototypeOf(e)
function Co(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = k(r),
      o = Ct(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      d = r[e](...s),
      f = n ? Jn : t ? Zt : Ye
    return (
      !t && le(i, 'iterate', c ? Yn : _t),
      oe(Object.create(d), {
        next() {
          const { value: h, done: g } = d.next()
          return g ? { value: h, done: g } : { value: l ? [f(h[0]), f(h[1])] : f(h), done: g }
        },
      })
    )
  }
}
function un(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Oo(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = k(i),
        l = k(r)
      e || (lt(r, l) && le(o, 'get', r), le(o, 'get', l))
      const { has: c } = cn(o),
        d = t ? Jn : e ? Zt : Ye
      if (c.call(o, r)) return d(i.get(r))
      if (c.call(o, l)) return d(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return (!e && le(k(r), 'iterate', _t), r.size)
    },
    has(r) {
      const i = this.__v_raw,
        o = k(i),
        l = k(r)
      return (
        e || (lt(r, l) && le(o, 'has', r), le(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = k(l),
        d = t ? Jn : e ? Zt : Ye
      return (!e && le(c, 'iterate', _t), l.forEach((f, h) => r.call(i, d(f), d(h), o)))
    },
  }
  return (
    oe(
      n,
      e
        ? { add: un('add'), set: un('set'), delete: un('delete'), clear: un('clear') }
        : {
            add(r) {
              !t && !Se(r) && !ut(r) && (r = k(r))
              const i = k(this)
              return (cn(i).has.call(i, r) || (i.add(r), ke(i, 'add', r, r)), this)
            },
            set(r, i) {
              !t && !Se(i) && !ut(i) && (i = k(i))
              const o = k(this),
                { has: l, get: c } = cn(o)
              let d = l.call(o, r)
              d || ((r = k(r)), (d = l.call(o, r)))
              const f = c.call(o, r)
              return (o.set(r, i), d ? lt(i, f) && ke(o, 'set', r, i) : ke(o, 'add', r, i), this)
            },
            delete(r) {
              const i = k(this),
                { has: o, get: l } = cn(i)
              let c = o.call(i, r)
              ;(c || ((r = k(r)), (c = o.call(i, r))), l && l.call(i, r))
              const d = i.delete(r)
              return (c && ke(i, 'delete', r, void 0), d)
            },
            clear() {
              const r = k(this),
                i = r.size !== 0,
                o = r.clear()
              return (i && ke(r, 'clear', void 0, void 0), o)
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = Co(r, e, t)
    }),
    n
  )
}
function xs(e, t) {
  const n = Oo(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(q(n, r) && r in s ? n : s, r, i)
}
const Po = { get: xs(!1, !1) },
  Io = { get: xs(!1, !0) },
  To = { get: xs(!0, !1) }
const Zr = new WeakMap(),
  ei = new WeakMap(),
  ti = new WeakMap(),
  No = new WeakMap()
function Mo(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Do(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mo(ro(e))
}
function Cn(e) {
  return ut(e) ? e : Rs(e, !1, Ao, Po, Zr)
}
function ni(e) {
  return Rs(e, !1, So, Io, ei)
}
function Xn(e) {
  return Rs(e, !0, wo, To, ti)
}
function Rs(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = Do(e)
  if (i === 0) return e
  const o = r.get(e)
  if (o) return o
  const l = new Proxy(e, i === 2 ? s : n)
  return (r.set(e, l), l)
}
function Ot(e) {
  return ut(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ut(e) {
  return !!(e && e.__v_isReadonly)
}
function Se(e) {
  return !!(e && e.__v_isShallow)
}
function As(e) {
  return e ? !!e.__v_raw : !1
}
function k(e) {
  const t = e && e.__v_raw
  return t ? k(t) : e
}
function si(e) {
  return (!q(e, '__v_skip') && Object.isExtensible(e) && Fr(e, '__v_skip', !0), e)
}
const Ye = (e) => (Z(e) ? Cn(e) : e),
  Zt = (e) => (Z(e) ? Xn(e) : e)
function ce(e) {
  return e ? e.__v_isRef === !0 : !1
}
function ri(e) {
  return ii(e, !1)
}
function Lo(e) {
  return ii(e, !0)
}
function ii(e, t) {
  return ce(e) ? e : new Fo(e, t)
}
class Fo {
  constructor(t, n) {
    ;((this.dep = new bs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : k(t)),
      (this._value = n ? t : Ye(t)),
      (this.__v_isShallow = n))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Se(t) || ut(t)
    ;((t = s ? t : k(t)),
      lt(t, n) && ((this._rawValue = t), (this._value = s ? t : Ye(t)), this.dep.trigger()))
  }
}
function qe(e) {
  return ce(e) ? e.value : e
}
const Ho = {
  get: (e, t, n) => (t === '__v_raw' ? e : qe(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return ce(r) && !ce(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function oi(e) {
  return Ot(e) ? e : new Proxy(e, Ho)
}
class Bo {
  constructor(t, n, s) {
    ;((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new bs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Jt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && J !== this)) return (Kr(this, !0), !0)
  }
  get value() {
    const t = this.dep.track()
    return ($r(this), t && (t.version = this.dep.version), this._value)
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function jo(e, t, n = !1) {
  let s, r
  return (j(e) ? (s = e) : ((s = e.get), (r = e.set)), new Bo(s, r, n))
}
const fn = {},
  gn = new WeakMap()
let gt
function Vo(e, t = !1, n = gt) {
  if (n) {
    let s = gn.get(n)
    ;(s || gn.set(n, (s = [])), s.push(e))
  }
}
function Uo(e, t, n = X) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n,
    d = (T) => (r ? T : Se(T) || r === !1 || r === 0 ? ot(T, 1) : ot(T))
  let f,
    h,
    g,
    m,
    C = !1,
    P = !1
  if (
    (ce(e)
      ? ((h = () => e.value), (C = Se(e)))
      : Ot(e)
        ? ((h = () => d(e)), (C = !0))
        : B(e)
          ? ((P = !0),
            (C = e.some((T) => Ot(T) || Se(T))),
            (h = () =>
              e.map((T) => {
                if (ce(T)) return T.value
                if (Ot(T)) return d(T)
                if (j(T)) return c ? c(T, 2) : T()
              })))
          : j(e)
            ? t
              ? (h = c ? () => c(e, 2) : e)
              : (h = () => {
                  if (g) {
                    Qe()
                    try {
                      g()
                    } finally {
                      ze()
                    }
                  }
                  const T = gt
                  gt = f
                  try {
                    return c ? c(e, 3, [m]) : e(m)
                  } finally {
                    gt = T
                  }
                })
            : (h = je),
    t && r)
  ) {
    const T = h,
      z = r === !0 ? 1 / 0 : r
    h = () => ot(T(), z)
  }
  const V = mo(),
    N = () => {
      ;(f.stop(), V && V.active && hs(V.effects, f))
    }
  if (i && t) {
    const T = t
    t = (...z) => {
      ;(T(...z), N())
    }
  }
  let I = P ? new Array(e.length).fill(fn) : fn
  const L = (T) => {
    if (!(!(f.flags & 1) || (!f.dirty && !T)))
      if (t) {
        const z = f.run()
        if (r || C || (P ? z.some((ie, ee) => lt(ie, I[ee])) : lt(z, I))) {
          g && g()
          const ie = gt
          gt = f
          try {
            const ee = [z, I === fn ? void 0 : P && I[0] === fn ? [] : I, m]
            ;((I = z), c ? c(t, 3, ee) : t(...ee))
          } finally {
            gt = ie
          }
        }
      } else f.run()
  }
  return (
    l && l(L),
    (f = new Wr(h)),
    (f.scheduler = o ? () => o(L, !1) : L),
    (m = (T) => Vo(T, !1, f)),
    (g = f.onStop =
      () => {
        const T = gn.get(f)
        if (T) {
          if (c) c(T, 4)
          else for (const z of T) z()
          gn.delete(f)
        }
      }),
    t ? (s ? L(!0) : (I = f.run())) : o ? o(L.bind(null, !0), !0) : f.run(),
    (N.pause = f.pause.bind(f)),
    (N.resume = f.resume.bind(f)),
    (N.stop = N),
    N
  )
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || ((n = n || new Map()), (n.get(e) || 0) >= t)) return e
  if ((n.set(e, t), t--, ce(e))) ot(e.value, t, n)
  else if (B(e)) for (let s = 0; s < e.length; s++) ot(e[s], t, n)
  else if (Tr(e) || Ct(e))
    e.forEach((s) => {
      ot(s, t, n)
    })
  else if (Dr(e)) {
    for (const s in e) ot(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n)
  }
  return e
}
function rn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    On(r, t, n)
  }
}
function Ve(e, t, n, s) {
  if (j(e)) {
    const r = rn(e, t, n, s)
    return (
      r &&
        Nr(r) &&
        r.catch((i) => {
          On(i, t, n)
        }),
      r
    )
  }
  if (B(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(Ve(e[i], t, n, s))
    return r
  }
}
function On(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || X
  if (t) {
    let l = t.parent
    const c = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const f = l.ec
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, c, d) === !1) return
      }
      l = l.parent
    }
    if (i) {
      ;(Qe(), rn(i, null, 10, [e, c, d]), ze())
      return
    }
  }
  Wo(e, n, r, s, o)
}
function Wo(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const ae = []
let Fe = -1
const Pt = []
let st = null,
  At = 0
const li = Promise.resolve()
let mn = null
function ci(e) {
  const t = mn || li
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Go(e) {
  let t = Fe + 1,
    n = ae.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = ae[s],
      i = en(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function ws(e) {
  if (!(e.flags & 1)) {
    const t = en(e),
      n = ae[ae.length - 1]
    ;(!n || (!(e.flags & 2) && t >= en(n)) ? ae.push(e) : ae.splice(Go(t), 0, e),
      (e.flags |= 1),
      ui())
  }
}
function ui() {
  mn || (mn = li.then(ai))
}
function Ko(e) {
  ;(B(e)
    ? Pt.push(...e)
    : st && e.id === -1
      ? st.splice(At + 1, 0, e)
      : e.flags & 1 || (Pt.push(e), (e.flags |= 1)),
    ui())
}
function Us(e, t, n = Fe + 1) {
  for (; n < ae.length; n++) {
    const s = ae[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      ;(ae.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2))
    }
  }
}
function fi(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort((n, s) => en(n) - en(s))
    if (((Pt.length = 0), st)) {
      st.push(...t)
      return
    }
    for (st = t, At = 0; At < st.length; At++) {
      const n = st[At]
      ;(n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2))
    }
    ;((st = null), (At = 0))
  }
}
const en = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function ai(e) {
  try {
    for (Fe = 0; Fe < ae.length; Fe++) {
      const t = ae[Fe]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), rn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Fe < ae.length; Fe++) {
      const t = ae[Fe]
      t && (t.flags &= -2)
    }
    ;((Fe = -1), (ae.length = 0), fi(), (mn = null), (ae.length || Pt.length) && ai())
  }
}
let Be = null,
  di = null
function _n(e) {
  const t = Be
  return ((Be = e), (di = (e && e.type.__scopeId) || null), t)
}
function Zn(e, t = Be, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && bn(-1)
    const i = _n(t)
    let o
    try {
      o = e(...r)
    } finally {
      ;(_n(i), s._d && bn(1))
    }
    return o
  }
  return ((s._n = !0), (s._c = !0), (s._d = !0), s)
}
function ht(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (Qe(), Ve(c, n, 8, [e.el, l, e, t]), ze())
  }
}
function an(e, t) {
  if (de) {
    let n = de.provides
    const s = de.parent && de.parent.provides
    ;(s === n && (n = de.provides = Object.create(s)), (n[e] = t))
  }
}
function $e(e, t, n = !1) {
  const s = Kl()
  if (s || It) {
    let r = It
      ? It._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && j(t) ? t.call(s && s.proxy) : t
  }
}
const ko = Symbol.for('v-scx'),
  qo = () => $e(ko)
function dn(e, t, n) {
  return hi(e, t, n)
}
function hi(e, t, n = X) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = oe({}, n),
    c = (t && s) || (!t && i !== 'post')
  let d
  if (nn) {
    if (i === 'sync') {
      const m = qo()
      d = m.__watcherHandles || (m.__watcherHandles = [])
    } else if (!c) {
      const m = () => {}
      return ((m.stop = je), (m.resume = je), (m.pause = je), m)
    }
  }
  const f = de
  l.call = (m, C, P) => Ve(m, f, C, P)
  let h = !1
  ;(i === 'post'
    ? (l.scheduler = (m) => {
        ye(m, f && f.suspense)
      })
    : i !== 'sync' &&
      ((h = !0),
      (l.scheduler = (m, C) => {
        C ? m() : ws(m)
      })),
    (l.augmentJob = (m) => {
      ;(t && (m.flags |= 4), h && ((m.flags |= 2), f && ((m.id = f.uid), (m.i = f))))
    }))
  const g = Uo(e, t, l)
  return (nn && (d ? d.push(g) : c && g()), g)
}
function $o(e, t, n) {
  const s = this.proxy,
    r = se(e) ? (e.includes('.') ? pi(s, e) : () => s[e]) : e.bind(s, s)
  let i
  j(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = ln(this),
    l = hi(r, i.bind(s), n)
  return (o(), l)
}
function pi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const Qo = Symbol('_vte'),
  zo = (e) => e.__isTeleport,
  Yo = Symbol('_leaveCb')
function Ss(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Ss(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function on(e, t) {
  return j(e) ? oe({ name: e.name }, t, { setup: e }) : e
}
function gi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
const vn = new WeakMap()
function qt(e, t, n, s, r = !1) {
  if (B(e)) {
    e.forEach((C, P) => qt(C, t && (B(t) ? t[P] : t), n, s, r))
    return
  }
  if ($t(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      qt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? Ns(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    d = t && t.r,
    f = l.refs === X ? (l.refs = {}) : l.refs,
    h = l.setupState,
    g = k(h),
    m = h === X ? Ir : (C) => q(g, C)
  if (d != null && d !== c) {
    if ((Ws(t), se(d))) ((f[d] = null), m(d) && (h[d] = null))
    else if (ce(d)) {
      d.value = null
      const C = t
      C.k && (f[C.k] = null)
    }
  }
  if (j(c)) rn(c, l, 12, [o, f])
  else {
    const C = se(c),
      P = ce(c)
    if (C || P) {
      const V = () => {
        if (e.f) {
          const N = C ? (m(c) ? h[c] : f[c]) : c.value
          if (r) B(N) && hs(N, i)
          else if (B(N)) N.includes(i) || N.push(i)
          else if (C) ((f[c] = [i]), m(c) && (h[c] = f[c]))
          else {
            const I = [i]
            ;((c.value = I), e.k && (f[e.k] = I))
          }
        } else C ? ((f[c] = o), m(c) && (h[c] = o)) : P && ((c.value = o), e.k && (f[e.k] = o))
      }
      if (o) {
        const N = () => {
          ;(V(), vn.delete(e))
        }
        ;((N.id = -1), vn.set(e, N), ye(N, n))
      } else (Ws(e), V())
    }
  }
}
function Ws(e) {
  const t = vn.get(e)
  t && ((t.flags |= 8), vn.delete(e))
}
Sn().requestIdleCallback
Sn().cancelIdleCallback
const $t = (e) => !!e.type.__asyncLoader,
  mi = (e) => e.type.__isKeepAlive
function Jo(e, t) {
  _i(e, 'a', t)
}
function Xo(e, t) {
  _i(e, 'da', t)
}
function _i(e, t, n = de) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Pn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) (mi(r.parent.vnode) && Zo(s, t, n, r), (r = r.parent))
  }
}
function Zo(e, t, n, s) {
  const r = Pn(t, e, s, !0)
  vi(() => {
    hs(s[t], r)
  }, n)
}
function Pn(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Qe()
          const l = ln(n),
            c = Ve(t, n, e, o)
          return (l(), ze(), c)
        })
    return (s ? r.unshift(i) : r.push(i), i)
  }
}
const Je =
    (e) =>
    (t, n = de) => {
      ;(!nn || e === 'sp') && Pn(e, (...s) => t(...s), n)
    },
  el = Je('bm'),
  tl = Je('m'),
  nl = Je('bu'),
  sl = Je('u'),
  rl = Je('bum'),
  vi = Je('um'),
  il = Je('sp'),
  ol = Je('rtg'),
  ll = Je('rtc')
function cl(e, t = de) {
  Pn('ec', e, t)
}
const ul = Symbol.for('v-ndc'),
  es = (e) => (e ? (Fi(e) ? Ns(e) : es(e.parent)) : null),
  Qt = oe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => es(e.parent),
    $root: (e) => es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => bi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ws(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = ci.bind(e.proxy)),
    $watch: (e) => $o.bind(e),
  }),
  jn = (e, t) => e !== X && !e.__isScriptSetup && q(e, t),
  fl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e
      if (t[0] !== '$') {
        const g = o[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (jn(s, t)) return ((o[t] = 1), s[t])
          if (r !== X && q(r, t)) return ((o[t] = 2), r[t])
          if (q(i, t)) return ((o[t] = 3), i[t])
          if (n !== X && q(n, t)) return ((o[t] = 4), n[t])
          ts && (o[t] = 0)
        }
      }
      const d = Qt[t]
      let f, h
      if (d) return (t === '$attrs' && le(e.attrs, 'get', ''), d(e))
      if ((f = l.__cssModules) && (f = f[t])) return f
      if (n !== X && q(n, t)) return ((o[t] = 4), n[t])
      if (((h = c.config.globalProperties), q(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return jn(r, t)
        ? ((r[t] = n), !0)
        : s !== X && q(s, t)
          ? ((s[t] = n), !0)
          : q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o } },
      l,
    ) {
      let c
      return !!(
        n[l] ||
        (e !== X && l[0] !== '$' && q(e, l)) ||
        jn(t, l) ||
        q(i, l) ||
        q(s, l) ||
        q(Qt, l) ||
        q(r.config.globalProperties, l) ||
        ((c = o.__cssModules) && c[l])
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Gs(e) {
  return B(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ts = !0
function al(e) {
  const t = bi(e),
    n = e.proxy,
    s = e.ctx
  ;((ts = !1), t.beforeCreate && Ks(t.beforeCreate, e, 'bc'))
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: d,
    created: f,
    beforeMount: h,
    mounted: g,
    beforeUpdate: m,
    updated: C,
    activated: P,
    deactivated: V,
    beforeDestroy: N,
    beforeUnmount: I,
    destroyed: L,
    unmounted: T,
    render: z,
    renderTracked: ie,
    renderTriggered: ee,
    errorCaptured: Oe,
    serverPrefetch: Xe,
    expose: Pe,
    inheritAttrs: Ze,
    components: at,
    directives: Ie,
    filters: Ft,
  } = t
  if ((d && dl(d, s, null), o))
    for (const Q in o) {
      const G = o[Q]
      j(G) && (s[Q] = G.bind(n))
    }
  if (r) {
    const Q = r.call(n, n)
    Z(Q) && (e.data = Cn(Q))
  }
  if (((ts = !0), i))
    for (const Q in i) {
      const G = i[Q],
        Ue = j(G) ? G.bind(n, n) : j(G.get) ? G.get.bind(n, n) : je,
        et = !j(G) && j(G.set) ? G.set.bind(n) : je,
        Te = Re({ get: Ue, set: et })
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (pe) => (Te.value = pe),
      })
    }
  if (l) for (const Q in l) yi(l[Q], s, n, Q)
  if (c) {
    const Q = j(c) ? c.call(n) : c
    Reflect.ownKeys(Q).forEach((G) => {
      an(G, Q[G])
    })
  }
  f && Ks(f, e, 'c')
  function re(Q, G) {
    B(G) ? G.forEach((Ue) => Q(Ue.bind(n))) : G && Q(G.bind(n))
  }
  if (
    (re(el, h),
    re(tl, g),
    re(nl, m),
    re(sl, C),
    re(Jo, P),
    re(Xo, V),
    re(cl, Oe),
    re(ll, ie),
    re(ol, ee),
    re(rl, I),
    re(vi, T),
    re(il, Xe),
    B(Pe))
  )
    if (Pe.length) {
      const Q = e.exposed || (e.exposed = {})
      Pe.forEach((G) => {
        Object.defineProperty(Q, G, { get: () => n[G], set: (Ue) => (n[G] = Ue), enumerable: !0 })
      })
    } else e.exposed || (e.exposed = {})
  ;(z && e.render === je && (e.render = z),
    Ze != null && (e.inheritAttrs = Ze),
    at && (e.components = at),
    Ie && (e.directives = Ie),
    Xe && gi(e))
}
function dl(e, t, n = je) {
  B(e) && (e = ns(e))
  for (const s in e) {
    const r = e[s]
    let i
    ;(Z(r)
      ? 'default' in r
        ? (i = $e(r.from || s, r.default, !0))
        : (i = $e(r.from || s))
      : (i = $e(r)),
      ce(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i))
  }
}
function Ks(e, t, n) {
  Ve(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function yi(e, t, n, s) {
  let r = s.includes('.') ? pi(n, s) : () => n[s]
  if (se(e)) {
    const i = t[e]
    j(i) && dn(r, i)
  } else if (j(e)) dn(r, e.bind(n))
  else if (Z(e))
    if (B(e)) e.forEach((i) => yi(i, t, n, s))
    else {
      const i = j(e.handler) ? e.handler.bind(n) : t[e.handler]
      j(i) && dn(r, i, e)
    }
}
function bi(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach((d) => yn(c, d, o, !0)), yn(c, t, o)),
    Z(t) && i.set(t, c),
    c
  )
}
function yn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  ;(i && yn(e, i, n, !0), r && r.forEach((o) => yn(e, o, n, !0)))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = hl[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const hl = {
  data: ks,
  props: qs,
  emits: qs,
  methods: Ut,
  computed: Ut,
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  components: Ut,
  directives: Ut,
  watch: gl,
  provide: ks,
  inject: pl,
}
function ks(e, t) {
  return t
    ? e
      ? function () {
          return oe(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function pl(e, t) {
  return Ut(ns(e), ns(t))
}
function ns(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ut(e, t) {
  return e ? oe(Object.create(null), e, t) : t
}
function qs(e, t) {
  return e
    ? B(e) && B(t)
      ? [...new Set([...e, ...t])]
      : oe(Object.create(null), Gs(e), Gs(t ?? {}))
    : t
}
function gl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = oe(Object.create(null), e)
  for (const s in t) n[s] = ue(e[s], t[s])
  return n
}
function Ei() {
  return {
    app: null,
    config: {
      isNativeTag: Ir,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let ml = 0
function _l(e, t) {
  return function (s, r = null) {
    ;(j(s) || (s = oe({}, s)), r != null && !Z(r) && (r = null))
    const i = Ei(),
      o = new WeakSet(),
      l = []
    let c = !1
    const d = (i.app = {
      _uid: ml++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Yl,
      get config() {
        return i.config
      },
      set config(f) {},
      use(f, ...h) {
        return (
          o.has(f) ||
            (f && j(f.install) ? (o.add(f), f.install(d, ...h)) : j(f) && (o.add(f), f(d, ...h))),
          d
        )
      },
      mixin(f) {
        return (i.mixins.includes(f) || i.mixins.push(f), d)
      },
      component(f, h) {
        return h ? ((i.components[f] = h), d) : i.components[f]
      },
      directive(f, h) {
        return h ? ((i.directives[f] = h), d) : i.directives[f]
      },
      mount(f, h, g) {
        if (!c) {
          const m = d._ceVNode || he(s, r)
          return (
            (m.appContext = i),
            g === !0 ? (g = 'svg') : g === !1 && (g = void 0),
            e(m, f, g),
            (c = !0),
            (d._container = f),
            (f.__vue_app__ = d),
            Ns(m.component)
          )
        }
      },
      onUnmount(f) {
        l.push(f)
      },
      unmount() {
        c && (Ve(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__)
      },
      provide(f, h) {
        return ((i.provides[f] = h), d)
      },
      runWithContext(f) {
        const h = It
        It = d
        try {
          return f()
        } finally {
          It = h
        }
      },
    })
    return d
  }
}
let It = null
const vl = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${vt(t)}Modifiers`]
function yl(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || X
  let r = n
  const i = t.startsWith('update:'),
    o = i && vl(s, t.slice(7))
  o && (o.trim && (r = n.map((f) => (se(f) ? f.trim() : f))), o.number && (r = n.map(lo)))
  let l,
    c = s[(l = Mn(t))] || s[(l = Mn(ct(t)))]
  ;(!c && i && (c = s[(l = Mn(vt(t)))]), c && Ve(c, e, 6, r))
  const d = s[l + 'Once']
  if (d) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;((e.emitted[l] = !0), Ve(d, e, 6, r))
  }
}
const bl = new WeakMap()
function xi(e, t, n = !1) {
  const s = n ? bl : t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!j(e)) {
    const c = (d) => {
      const f = xi(d, t, !0)
      f && ((l = !0), oe(o, f))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c))
  }
  return !i && !l
    ? (Z(e) && s.set(e, null), null)
    : (B(i) ? i.forEach((c) => (o[c] = null)) : oe(o, i), Z(e) && s.set(e, o), o)
}
function In(e, t) {
  return !e || !Rn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      q(e, t[0].toLowerCase() + t.slice(1)) || q(e, vt(t)) || q(e, t))
}
function $s(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: d,
      renderCache: f,
      props: h,
      data: g,
      setupState: m,
      ctx: C,
      inheritAttrs: P,
    } = e,
    V = _n(e)
  let N, I
  try {
    if (n.shapeFlag & 4) {
      const T = r || s,
        z = T
      ;((N = He(d.call(z, T, f, h, m, g, C))), (I = l))
    } else {
      const T = t
      ;((N = He(T.length > 1 ? T(h, { attrs: l, slots: o, emit: c }) : T(h, null))),
        (I = t.props ? l : El(l)))
    }
  } catch (T) {
    ;((zt.length = 0), On(T, e, 1), (N = he(Nt)))
  }
  let L = N
  if (I && P !== !1) {
    const T = Object.keys(I),
      { shapeFlag: z } = L
    T.length && z & 7 && (i && T.some(ds) && (I = xl(I, i)), (L = Mt(L, I, !1, !0)))
  }
  return (
    n.dirs && ((L = Mt(L, null, !1, !0)), (L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Ss(L, n.transition),
    (N = L),
    _n(V),
    N
  )
}
const El = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Rn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  xl = (e, t) => {
    const n = {}
    for (const s in e) (!ds(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Rl(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    d = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? Qs(s, o, d) : !!o
    if (c & 8) {
      const f = t.dynamicProps
      for (let h = 0; h < f.length; h++) {
        const g = f[h]
        if (o[g] !== s[g] && !In(d, g)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? Qs(s, o, d) : !0) : !!o
  return !1
}
function Qs(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !In(n, i)) return !0
  }
  return !1
}
function Al({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      (((e = t.vnode).el = n), (t = t.parent))
    else break
  }
}
const Ri = {},
  Ai = () => Object.create(Ri),
  wi = (e) => Object.getPrototypeOf(e) === Ri
function wl(e, t, n, s = !1) {
  const r = {},
    i = Ai()
  ;((e.propsDefaults = Object.create(null)), Si(e, t, r, i))
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  ;(n ? (e.props = s ? r : ni(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i))
}
function Sl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = k(r),
    [c] = e.propsOptions
  let d = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps
      for (let h = 0; h < f.length; h++) {
        let g = f[h]
        if (In(e.emitsOptions, g)) continue
        const m = t[g]
        if (c)
          if (q(i, g)) m !== i[g] && ((i[g] = m), (d = !0))
          else {
            const C = ct(g)
            r[C] = ss(c, l, C, m, e, !1)
          }
        else m !== i[g] && ((i[g] = m), (d = !0))
      }
    }
  } else {
    Si(e, t, r, i) && (d = !0)
    let f
    for (const h in l)
      (!t || (!q(t, h) && ((f = vt(h)) === h || !q(t, f)))) &&
        (c
          ? n && (n[h] !== void 0 || n[f] !== void 0) && (r[h] = ss(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l) for (const h in i) (!t || !q(t, h)) && (delete i[h], (d = !0))
  }
  d && ke(e.attrs, 'set', '')
}
function Si(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (Gt(c)) continue
      const d = t[c]
      let f
      r && q(r, (f = ct(c)))
        ? !i || !i.includes(f)
          ? (n[f] = d)
          : ((l || (l = {}))[f] = d)
        : In(e.emitsOptions, c) || ((!(c in s) || d !== s[c]) && ((s[c] = d), (o = !0)))
    }
  if (i) {
    const c = k(n),
      d = l || X
    for (let f = 0; f < i.length; f++) {
      const h = i[f]
      n[h] = ss(r, c, h, d[h], e, !q(d, h))
    }
  }
  return o
}
function ss(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = q(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && j(c)) {
        const { propsDefaults: d } = r
        if (n in d) s = d[n]
        else {
          const f = ln(r)
          ;((s = d[n] = c.call(null, t)), f())
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === vt(n)) && (s = !0))
  }
  return s
}
const Cl = new WeakMap()
function Ci(e, t, n = !1) {
  const s = n ? Cl : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!j(e)) {
    const f = (h) => {
      c = !0
      const [g, m] = Ci(h, t, !0)
      ;(oe(o, g), m && l.push(...m))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f))
  }
  if (!i && !c) return (Z(e) && s.set(e, St), St)
  if (B(i))
    for (let f = 0; f < i.length; f++) {
      const h = ct(i[f])
      zs(h) && (o[h] = X)
    }
  else if (i)
    for (const f in i) {
      const h = ct(f)
      if (zs(h)) {
        const g = i[f],
          m = (o[h] = B(g) || j(g) ? { type: g } : oe({}, g)),
          C = m.type
        let P = !1,
          V = !0
        if (B(C))
          for (let N = 0; N < C.length; ++N) {
            const I = C[N],
              L = j(I) && I.name
            if (L === 'Boolean') {
              P = !0
              break
            } else L === 'String' && (V = !1)
          }
        else P = j(C) && C.name === 'Boolean'
        ;((m[0] = P), (m[1] = V), (P || q(m, 'default')) && l.push(h))
      }
    }
  const d = [o, l]
  return (Z(e) && s.set(e, d), d)
}
function zs(e) {
  return e[0] !== '$' && !Gt(e)
}
const Cs = (e) => e === '_' || e === '_ctx' || e === '$stable',
  Os = (e) => (B(e) ? e.map(He) : [He(e)]),
  Ol = (e, t, n) => {
    if (t._n) return t
    const s = Zn((...r) => Os(t(...r)), n)
    return ((s._c = !1), s)
  },
  Oi = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Cs(r)) continue
      const i = e[r]
      if (j(i)) t[r] = Ol(r, i, s)
      else if (i != null) {
        const o = Os(i)
        t[r] = () => o
      }
    }
  },
  Pi = (e, t) => {
    const n = Os(t)
    e.slots.default = () => n
  },
  Ii = (e, t, n) => {
    for (const s in t) (n || !Cs(s)) && (e[s] = t[s])
  },
  Pl = (e, t, n) => {
    const s = (e.slots = Ai())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Ii(s, t, n), n && Fr(s, '_', r, !0)) : Oi(t, s)
    } else t && Pi(e, t)
  },
  Il = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = X
    if (s.shapeFlag & 32) {
      const l = t._
      ;(l ? (n && l === 1 ? (i = !1) : Ii(r, t, n)) : ((i = !t.$stable), Oi(t, r)), (o = t))
    } else t && (Pi(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Cs(l) && o[l] == null && delete r[l]
  },
  ye = Ll
function Tl(e) {
  return Nl(e)
}
function Nl(e, t) {
  const n = Sn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: d,
      setElementText: f,
      parentNode: h,
      nextSibling: g,
      setScopeId: m = je,
      insertStaticContent: C,
    } = e,
    P = (u, a, p, _ = null, b = null, v = null, A = void 0, R = null, x = !!a.dynamicChildren) => {
      if (u === a) return
      ;(u && !jt(u, a) && ((_ = y(u)), pe(u, b, v, !0), (u = null)),
        a.patchFlag === -2 && ((x = !1), (a.dynamicChildren = null)))
      const { type: E, ref: F, shapeFlag: S } = a
      switch (E) {
        case Tn:
          V(u, a, p, _)
          break
        case Nt:
          N(u, a, p, _)
          break
        case Un:
          u == null && I(a, p, _, A)
          break
        case xe:
          at(u, a, p, _, b, v, A, R, x)
          break
        default:
          S & 1
            ? z(u, a, p, _, b, v, A, R, x)
            : S & 6
              ? Ie(u, a, p, _, b, v, A, R, x)
              : (S & 64 || S & 128) && E.process(u, a, p, _, b, v, A, R, x, M)
      }
      F != null && b
        ? qt(F, u && u.ref, v, a || u, !a)
        : F == null && u && u.ref != null && qt(u.ref, null, v, u, !0)
    },
    V = (u, a, p, _) => {
      if (u == null) s((a.el = l(a.children)), p, _)
      else {
        const b = (a.el = u.el)
        a.children !== u.children && d(b, a.children)
      }
    },
    N = (u, a, p, _) => {
      u == null ? s((a.el = c(a.children || '')), p, _) : (a.el = u.el)
    },
    I = (u, a, p, _) => {
      ;[u.el, u.anchor] = C(u.children, a, p, _, u.el, u.anchor)
    },
    L = ({ el: u, anchor: a }, p, _) => {
      let b
      for (; u && u !== a; ) ((b = g(u)), s(u, p, _), (u = b))
      s(a, p, _)
    },
    T = ({ el: u, anchor: a }) => {
      let p
      for (; u && u !== a; ) ((p = g(u)), r(u), (u = p))
      r(a)
    },
    z = (u, a, p, _, b, v, A, R, x) => {
      if ((a.type === 'svg' ? (A = 'svg') : a.type === 'math' && (A = 'mathml'), u == null))
        ie(a, p, _, b, v, A, R, x)
      else {
        const E = u.el && u.el._isVueCE ? u.el : null
        try {
          ;(E && E._beginPatch(), Xe(u, a, b, v, A, R, x))
        } finally {
          E && E._endPatch()
        }
      }
    },
    ie = (u, a, p, _, b, v, A, R) => {
      let x, E
      const { props: F, shapeFlag: S, transition: D, dirs: H } = u
      if (
        ((x = u.el = o(u.type, v, F && F.is, F)),
        S & 8 ? f(x, u.children) : S & 16 && Oe(u.children, x, null, _, b, Vn(u, v), A, R),
        H && ht(u, null, _, 'created'),
        ee(x, u, u.scopeId, A, _),
        F)
      ) {
        for (const Y in F) Y !== 'value' && !Gt(Y) && i(x, Y, null, F[Y], v, _)
        ;('value' in F && i(x, 'value', null, F.value, v),
          (E = F.onVnodeBeforeMount) && Le(E, _, u))
      }
      H && ht(u, null, _, 'beforeMount')
      const W = Ml(b, D)
      ;(W && D.beforeEnter(x),
        s(x, a, p),
        ((E = F && F.onVnodeMounted) || W || H) &&
          ye(() => {
            ;(E && Le(E, _, u), W && D.enter(x), H && ht(u, null, _, 'mounted'))
          }, b))
    },
    ee = (u, a, p, _, b) => {
      if ((p && m(u, p), _)) for (let v = 0; v < _.length; v++) m(u, _[v])
      if (b) {
        let v = b.subTree
        if (a === v || (Di(v.type) && (v.ssContent === a || v.ssFallback === a))) {
          const A = b.vnode
          ee(u, A, A.scopeId, A.slotScopeIds, b.parent)
        }
      }
    },
    Oe = (u, a, p, _, b, v, A, R, x = 0) => {
      for (let E = x; E < u.length; E++) {
        const F = (u[E] = R ? rt(u[E]) : He(u[E]))
        P(null, F, a, p, _, b, v, A, R)
      }
    },
    Xe = (u, a, p, _, b, v, A) => {
      const R = (a.el = u.el)
      let { patchFlag: x, dynamicChildren: E, dirs: F } = a
      x |= u.patchFlag & 16
      const S = u.props || X,
        D = a.props || X
      let H
      if (
        (p && pt(p, !1),
        (H = D.onVnodeBeforeUpdate) && Le(H, p, a, u),
        F && ht(a, u, p, 'beforeUpdate'),
        p && pt(p, !0),
        ((S.innerHTML && D.innerHTML == null) || (S.textContent && D.textContent == null)) &&
          f(R, ''),
        E
          ? Pe(u.dynamicChildren, E, R, p, _, Vn(a, b), v)
          : A || G(u, a, R, null, p, _, Vn(a, b), v, !1),
        x > 0)
      ) {
        if (x & 16) Ze(R, S, D, p, b)
        else if (
          (x & 2 && S.class !== D.class && i(R, 'class', null, D.class, b),
          x & 4 && i(R, 'style', S.style, D.style, b),
          x & 8)
        ) {
          const W = a.dynamicProps
          for (let Y = 0; Y < W.length; Y++) {
            const $ = W[Y],
              ge = S[$],
              me = D[$]
            ;(me !== ge || $ === 'value') && i(R, $, ge, me, b, p)
          }
        }
        x & 1 && u.children !== a.children && f(R, a.children)
      } else !A && E == null && Ze(R, S, D, p, b)
      ;((H = D.onVnodeUpdated) || F) &&
        ye(() => {
          ;(H && Le(H, p, a, u), F && ht(a, u, p, 'updated'))
        }, _)
    },
    Pe = (u, a, p, _, b, v, A) => {
      for (let R = 0; R < a.length; R++) {
        const x = u[R],
          E = a[R],
          F = x.el && (x.type === xe || !jt(x, E) || x.shapeFlag & 198) ? h(x.el) : p
        P(x, E, F, null, _, b, v, A, !0)
      }
    },
    Ze = (u, a, p, _, b) => {
      if (a !== p) {
        if (a !== X) for (const v in a) !Gt(v) && !(v in p) && i(u, v, a[v], null, b, _)
        for (const v in p) {
          if (Gt(v)) continue
          const A = p[v],
            R = a[v]
          A !== R && v !== 'value' && i(u, v, R, A, b, _)
        }
        'value' in p && i(u, 'value', a.value, p.value, b)
      }
    },
    at = (u, a, p, _, b, v, A, R, x) => {
      const E = (a.el = u ? u.el : l('')),
        F = (a.anchor = u ? u.anchor : l(''))
      let { patchFlag: S, dynamicChildren: D, slotScopeIds: H } = a
      ;(H && (R = R ? R.concat(H) : H),
        u == null
          ? (s(E, p, _), s(F, p, _), Oe(a.children || [], p, F, b, v, A, R, x))
          : S > 0 && S & 64 && D && u.dynamicChildren && u.dynamicChildren.length === D.length
            ? (Pe(u.dynamicChildren, D, p, b, v, A, R),
              (a.key != null || (b && a === b.subTree)) && Ti(u, a, !0))
            : G(u, a, p, F, b, v, A, R, x))
    },
    Ie = (u, a, p, _, b, v, A, R, x) => {
      ;((a.slotScopeIds = R),
        u == null
          ? a.shapeFlag & 512
            ? b.ctx.activate(a, p, _, A, x)
            : Ft(a, p, _, b, v, A, x)
          : yt(u, a, x))
    },
    Ft = (u, a, p, _, b, v, A) => {
      const R = (u.component = Gl(u, _, b))
      if ((mi(u) && (R.ctx.renderer = M), kl(R, !1, A), R.asyncDep)) {
        if ((b && b.registerDep(R, re, A), !u.el)) {
          const x = (R.subTree = he(Nt))
          ;(N(null, x, a, p), (u.placeholder = x.el))
        }
      } else re(R, u, a, p, b, v, A)
    },
    yt = (u, a, p) => {
      const _ = (a.component = u.component)
      if (Rl(u, a, p))
        if (_.asyncDep && !_.asyncResolved) {
          Q(_, a, p)
          return
        } else ((_.next = a), _.update())
      else ((a.el = u.el), (_.vnode = a))
    },
    re = (u, a, p, _, b, v, A) => {
      const R = () => {
        if (u.isMounted) {
          let { next: S, bu: D, u: H, parent: W, vnode: Y } = u
          {
            const Me = Ni(u)
            if (Me) {
              ;(S && ((S.el = Y.el), Q(u, S, A)),
                Me.asyncDep.then(() => {
                  u.isUnmounted || R()
                }))
              return
            }
          }
          let $ = S,
            ge
          ;(pt(u, !1),
            S ? ((S.el = Y.el), Q(u, S, A)) : (S = Y),
            D && Dn(D),
            (ge = S.props && S.props.onVnodeBeforeUpdate) && Le(ge, W, S, Y),
            pt(u, !0))
          const me = $s(u),
            Ne = u.subTree
          ;((u.subTree = me),
            P(Ne, me, h(Ne.el), y(Ne), u, b, v),
            (S.el = me.el),
            $ === null && Al(u, me.el),
            H && ye(H, b),
            (ge = S.props && S.props.onVnodeUpdated) && ye(() => Le(ge, W, S, Y), b))
        } else {
          let S
          const { el: D, props: H } = a,
            { bm: W, m: Y, parent: $, root: ge, type: me } = u,
            Ne = $t(a)
          ;(pt(u, !1), W && Dn(W), !Ne && (S = H && H.onVnodeBeforeMount) && Le(S, $, a), pt(u, !0))
          {
            ge.ce && ge.ce._def.shadowRoot !== !1 && ge.ce._injectChildStyle(me)
            const Me = (u.subTree = $s(u))
            ;(P(null, Me, p, _, u, b, v), (a.el = Me.el))
          }
          if ((Y && ye(Y, b), !Ne && (S = H && H.onVnodeMounted))) {
            const Me = a
            ye(() => Le(S, $, Me), b)
          }
          ;((a.shapeFlag & 256 || ($ && $t($.vnode) && $.vnode.shapeFlag & 256)) &&
            u.a &&
            ye(u.a, b),
            (u.isMounted = !0),
            (a = p = _ = null))
        }
      }
      u.scope.on()
      const x = (u.effect = new Wr(R))
      u.scope.off()
      const E = (u.update = x.run.bind(x)),
        F = (u.job = x.runIfDirty.bind(x))
      ;((F.i = u), (F.id = u.uid), (x.scheduler = () => ws(F)), pt(u, !0), E())
    },
    Q = (u, a, p) => {
      a.component = u
      const _ = u.vnode.props
      ;((u.vnode = a),
        (u.next = null),
        Sl(u, a.props, _, p),
        Il(u, a.children, p),
        Qe(),
        Us(u),
        ze())
    },
    G = (u, a, p, _, b, v, A, R, x = !1) => {
      const E = u && u.children,
        F = u ? u.shapeFlag : 0,
        S = a.children,
        { patchFlag: D, shapeFlag: H } = a
      if (D > 0) {
        if (D & 128) {
          et(E, S, p, _, b, v, A, R, x)
          return
        } else if (D & 256) {
          Ue(E, S, p, _, b, v, A, R, x)
          return
        }
      }
      H & 8
        ? (F & 16 && Ee(E, b, v), S !== E && f(p, S))
        : F & 16
          ? H & 16
            ? et(E, S, p, _, b, v, A, R, x)
            : Ee(E, b, v, !0)
          : (F & 8 && f(p, ''), H & 16 && Oe(S, p, _, b, v, A, R, x))
    },
    Ue = (u, a, p, _, b, v, A, R, x) => {
      ;((u = u || St), (a = a || St))
      const E = u.length,
        F = a.length,
        S = Math.min(E, F)
      let D
      for (D = 0; D < S; D++) {
        const H = (a[D] = x ? rt(a[D]) : He(a[D]))
        P(u[D], H, p, null, b, v, A, R, x)
      }
      E > F ? Ee(u, b, v, !0, !1, S) : Oe(a, p, _, b, v, A, R, x, S)
    },
    et = (u, a, p, _, b, v, A, R, x) => {
      let E = 0
      const F = a.length
      let S = u.length - 1,
        D = F - 1
      for (; E <= S && E <= D; ) {
        const H = u[E],
          W = (a[E] = x ? rt(a[E]) : He(a[E]))
        if (jt(H, W)) P(H, W, p, null, b, v, A, R, x)
        else break
        E++
      }
      for (; E <= S && E <= D; ) {
        const H = u[S],
          W = (a[D] = x ? rt(a[D]) : He(a[D]))
        if (jt(H, W)) P(H, W, p, null, b, v, A, R, x)
        else break
        ;(S--, D--)
      }
      if (E > S) {
        if (E <= D) {
          const H = D + 1,
            W = H < F ? a[H].el : _
          for (; E <= D; ) (P(null, (a[E] = x ? rt(a[E]) : He(a[E])), p, W, b, v, A, R, x), E++)
        }
      } else if (E > D) for (; E <= S; ) (pe(u[E], b, v, !0), E++)
      else {
        const H = E,
          W = E,
          Y = new Map()
        for (E = W; E <= D; E++) {
          const ve = (a[E] = x ? rt(a[E]) : He(a[E]))
          ve.key != null && Y.set(ve.key, E)
        }
        let $,
          ge = 0
        const me = D - W + 1
        let Ne = !1,
          Me = 0
        const Ht = new Array(me)
        for (E = 0; E < me; E++) Ht[E] = 0
        for (E = H; E <= S; E++) {
          const ve = u[E]
          if (ge >= me) {
            pe(ve, b, v, !0)
            continue
          }
          let De
          if (ve.key != null) De = Y.get(ve.key)
          else
            for ($ = W; $ <= D; $++)
              if (Ht[$ - W] === 0 && jt(ve, a[$])) {
                De = $
                break
              }
          De === void 0
            ? pe(ve, b, v, !0)
            : ((Ht[De - W] = E + 1),
              De >= Me ? (Me = De) : (Ne = !0),
              P(ve, a[De], p, null, b, v, A, R, x),
              ge++)
        }
        const Ls = Ne ? Dl(Ht) : St
        for ($ = Ls.length - 1, E = me - 1; E >= 0; E--) {
          const ve = W + E,
            De = a[ve],
            Fs = a[ve + 1],
            Hs = ve + 1 < F ? Fs.el || Mi(Fs) : _
          Ht[E] === 0
            ? P(null, De, p, Hs, b, v, A, R, x)
            : Ne && ($ < 0 || E !== Ls[$] ? Te(De, p, Hs, 2) : $--)
        }
      }
    },
    Te = (u, a, p, _, b = null) => {
      const { el: v, type: A, transition: R, children: x, shapeFlag: E } = u
      if (E & 6) {
        Te(u.component.subTree, a, p, _)
        return
      }
      if (E & 128) {
        u.suspense.move(a, p, _)
        return
      }
      if (E & 64) {
        A.move(u, a, p, M)
        return
      }
      if (A === xe) {
        s(v, a, p)
        for (let S = 0; S < x.length; S++) Te(x[S], a, p, _)
        s(u.anchor, a, p)
        return
      }
      if (A === Un) {
        L(u, a, p)
        return
      }
      if (_ !== 2 && E & 1 && R)
        if (_ === 0) (R.beforeEnter(v), s(v, a, p), ye(() => R.enter(v), b))
        else {
          const { leave: S, delayLeave: D, afterLeave: H } = R,
            W = () => {
              u.ctx.isUnmounted ? r(v) : s(v, a, p)
            },
            Y = () => {
              ;(v._isLeaving && v[Yo](!0),
                S(v, () => {
                  ;(W(), H && H())
                }))
            }
          D ? D(v, W, Y) : Y()
        }
      else s(v, a, p)
    },
    pe = (u, a, p, _ = !1, b = !1) => {
      const {
        type: v,
        props: A,
        ref: R,
        children: x,
        dynamicChildren: E,
        shapeFlag: F,
        patchFlag: S,
        dirs: D,
        cacheIndex: H,
      } = u
      if (
        (S === -2 && (b = !1),
        R != null && (Qe(), qt(R, null, p, u, !0), ze()),
        H != null && (a.renderCache[H] = void 0),
        F & 256)
      ) {
        a.ctx.deactivate(u)
        return
      }
      const W = F & 1 && D,
        Y = !$t(u)
      let $
      if ((Y && ($ = A && A.onVnodeBeforeUnmount) && Le($, a, u), F & 6)) dt(u.component, p, _)
      else {
        if (F & 128) {
          u.suspense.unmount(p, _)
          return
        }
        ;(W && ht(u, null, a, 'beforeUnmount'),
          F & 64
            ? u.type.remove(u, a, p, M, _)
            : E && !E.hasOnce && (v !== xe || (S > 0 && S & 64))
              ? Ee(E, a, p, !1, !0)
              : ((v === xe && S & 384) || (!b && F & 16)) && Ee(x, a, p),
          _ && bt(u))
      }
      ;((Y && ($ = A && A.onVnodeUnmounted)) || W) &&
        ye(() => {
          ;($ && Le($, a, u), W && ht(u, null, a, 'unmounted'))
        }, p)
    },
    bt = (u) => {
      const { type: a, el: p, anchor: _, transition: b } = u
      if (a === xe) {
        Et(p, _)
        return
      }
      if (a === Un) {
        T(u)
        return
      }
      const v = () => {
        ;(r(p), b && !b.persisted && b.afterLeave && b.afterLeave())
      }
      if (u.shapeFlag & 1 && b && !b.persisted) {
        const { leave: A, delayLeave: R } = b,
          x = () => A(p, v)
        R ? R(u.el, v, x) : x()
      } else v()
    },
    Et = (u, a) => {
      let p
      for (; u !== a; ) ((p = g(u)), r(u), (u = p))
      r(a)
    },
    dt = (u, a, p) => {
      const { bum: _, scope: b, job: v, subTree: A, um: R, m: x, a: E } = u
      ;(Ys(x),
        Ys(E),
        _ && Dn(_),
        b.stop(),
        v && ((v.flags |= 8), pe(A, u, a, p)),
        R && ye(R, a),
        ye(() => {
          u.isUnmounted = !0
        }, a))
    },
    Ee = (u, a, p, _ = !1, b = !1, v = 0) => {
      for (let A = v; A < u.length; A++) pe(u[A], a, p, _, b)
    },
    y = (u) => {
      if (u.shapeFlag & 6) return y(u.component.subTree)
      if (u.shapeFlag & 128) return u.suspense.next()
      const a = g(u.anchor || u.el),
        p = a && a[Qo]
      return p ? g(p) : a
    }
  let O = !1
  const w = (u, a, p) => {
      let _
      ;(u == null
        ? a._vnode && (pe(a._vnode, null, null, !0), (_ = a._vnode.component))
        : P(a._vnode || null, u, a, null, null, null, p),
        (a._vnode = u),
        O || ((O = !0), Us(_), fi(), (O = !1)))
    },
    M = { p: P, um: pe, m: Te, r: bt, mt: Ft, mc: Oe, pc: G, pbc: Pe, n: y, o: e }
  return { render: w, hydrate: void 0, createApp: _l(w) }
}
function Vn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function pt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Ml(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ti(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (B(s) && B(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      ;(l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[i] = rt(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Ti(o, l)),
        l.type === Tn &&
          (l.patchFlag !== -1 ? (l.el = o.el) : (l.__elIndex = i + (e.type === xe ? 1 : 0))),
        l.type === Nt && !l.el && (l.el = o.el))
    }
}
function Dl(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const d = e[s]
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        ;((t[s] = r), n.push(s))
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        ((l = (i + o) >> 1), e[n[l]] < d ? (i = l + 1) : (o = l))
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) ((n[i] = o), (o = t[o]))
  return n
}
function Ni(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ni(t)
}
function Ys(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
function Mi(e) {
  if (e.placeholder) return e.placeholder
  const t = e.component
  return t ? Mi(t.subTree) : null
}
const Di = (e) => e.__isSuspense
function Ll(e, t) {
  t && t.pendingBranch ? (B(e) ? t.effects.push(...e) : t.effects.push(e)) : Ko(e)
}
const xe = Symbol.for('v-fgt'),
  Tn = Symbol.for('v-txt'),
  Nt = Symbol.for('v-cmt'),
  Un = Symbol.for('v-stc'),
  zt = []
let be = null
function Ps(e = !1) {
  zt.push((be = e ? null : []))
}
function Fl() {
  ;(zt.pop(), (be = zt[zt.length - 1] || null))
}
let tn = 1
function bn(e, t = !1) {
  ;((tn += e), e < 0 && be && t && (be.hasOnce = !0))
}
function Hl(e) {
  return ((e.dynamicChildren = tn > 0 ? be || St : null), Fl(), tn > 0 && be && be.push(e), e)
}
function Is(e, t, n, s, r, i) {
  return Hl(Ae(e, t, n, s, r, i, !0))
}
function En(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Li = ({ key: e }) => e ?? null,
  hn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (se(e) || ce(e) || j(e) ? { i: Be, r: e, k: t, f: !!n } : e) : null
  )
function Ae(e, t = null, n = null, s = 0, r = null, i = e === xe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Li(t),
    ref: t && hn(t),
    scopeId: di,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Be,
  }
  return (
    l ? (Ts(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16),
    tn > 0 && !o && be && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && be.push(c),
    c
  )
}
const he = Bl
function Bl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === ul) && (e = Nt), En(e))) {
    const l = Mt(e, t, !0)
    return (
      n && Ts(l, n),
      tn > 0 && !i && be && (l.shapeFlag & 6 ? (be[be.indexOf(e)] = l) : be.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((zl(e) && (e = e.__vccOpts), t)) {
    t = jl(t)
    let { class: l, style: c } = t
    ;(l && !se(l) && (t.class = ms(l)),
      Z(c) && (As(c) && !B(c) && (c = oe({}, c)), (t.style = gs(c))))
  }
  const o = se(e) ? 1 : Di(e) ? 128 : zo(e) ? 64 : Z(e) ? 4 : j(e) ? 2 : 0
  return Ae(e, t, n, s, r, o, i, !0)
}
function jl(e) {
  return e ? (As(e) || wi(e) ? oe({}, e) : e) : null
}
function Mt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    d = t ? Vl(r || {}, t) : r,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && Li(d),
      ref: t && t.ref ? (n && i ? (B(i) ? i.concat(hn(t)) : [i, hn(t)]) : hn(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== xe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Mt(e.ssContent),
      ssFallback: e.ssFallback && Mt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return (c && s && Ss(f, c.clone(f)), f)
}
function Tt(e = ' ', t = 0) {
  return he(Tn, null, e, t)
}
function He(e) {
  return e == null || typeof e == 'boolean'
    ? he(Nt)
    : B(e)
      ? he(xe, null, e.slice())
      : En(e)
        ? rt(e)
        : he(Tn, null, String(e))
}
function rt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Mt(e)
}
function Ts(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (B(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Ts(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !wi(t)
        ? (t._ctx = Be)
        : r === 3 && Be && (Be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: Be }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Tt(t)])) : (n = 8))
  ;((e.children = t), (e.shapeFlag |= n))
}
function Vl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = ms([t.class, s.class]))
      else if (r === 'style') t.style = gs([t.style, s.style])
      else if (Rn(r)) {
        const i = t[r],
          o = s[r]
        o && i !== o && !(B(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Le(e, t, n, s = null) {
  Ve(e, t, 7, [n, s])
}
const Ul = Ei()
let Wl = 0
function Gl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ul,
    i = {
      uid: Wl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ur(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ci(s, r),
      emitsOptions: xi(s, r),
      emit: null,
      emitted: null,
      propsDefaults: X,
      inheritAttrs: s.inheritAttrs,
      ctx: X,
      data: X,
      props: X,
      attrs: X,
      slots: X,
      refs: X,
      setupState: X,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = yl.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let de = null
const Kl = () => de || Be
let xn, rs
{
  const e = Sn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;((xn = t('__VUE_INSTANCE_SETTERS__', (n) => (de = n))),
    (rs = t('__VUE_SSR_SETTERS__', (n) => (nn = n))))
}
const ln = (e) => {
    const t = de
    return (
      xn(e),
      e.scope.on(),
      () => {
        ;(e.scope.off(), xn(t))
      }
    )
  },
  Js = () => {
    ;(de && de.scope.off(), xn(null))
  }
function Fi(e) {
  return e.vnode.shapeFlag & 4
}
let nn = !1
function kl(e, t = !1, n = !1) {
  t && rs(t)
  const { props: s, children: r } = e.vnode,
    i = Fi(e)
  ;(wl(e, s, i, t), Pl(e, r, n || t))
  const o = i ? ql(e, t) : void 0
  return (t && rs(!1), o)
}
function ql(e, t) {
  const n = e.type
  ;((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, fl)))
  const { setup: s } = n
  if (s) {
    Qe()
    const r = (e.setupContext = s.length > 1 ? Ql(e) : null),
      i = ln(e),
      o = rn(s, e, 0, [e.props, r]),
      l = Nr(o)
    if ((ze(), i(), (l || e.sp) && !$t(e) && gi(e), l)) {
      if ((o.then(Js, Js), t))
        return o
          .then((c) => {
            Xs(e, c)
          })
          .catch((c) => {
            On(c, e, 0)
          })
      e.asyncDep = o
    } else Xs(e, o)
  } else Hi(e)
}
function Xs(e, t, n) {
  ;(j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = oi(t)),
    Hi(e))
}
function Hi(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || je)
  {
    const r = ln(e)
    Qe()
    try {
      al(e)
    } finally {
      ;(ze(), r())
    }
  }
}
const $l = {
  get(e, t) {
    return (le(e, 'get', ''), e[t])
  },
}
function Ql(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, $l), slots: e.slots, emit: e.emit, expose: t }
}
function Ns(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(oi(si(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Qt) return Qt[n](e)
          },
          has(t, n) {
            return n in t || n in Qt
          },
        }))
    : e.proxy
}
function zl(e) {
  return j(e) && '__vccOpts' in e
}
const Re = (e, t) => jo(e, t, nn)
function Bi(e, t, n) {
  try {
    bn(-1)
    const s = arguments.length
    return s === 2
      ? Z(t) && !B(t)
        ? En(t)
          ? he(e, null, [t])
          : he(e, t)
        : he(e, null, t)
      : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && En(n) && (n = [n]),
        he(e, t, n))
  } finally {
    bn(1)
  }
}
const Yl = '3.5.27'
let is
const Zs = typeof window < 'u' && window.trustedTypes
if (Zs)
  try {
    is = Zs.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const ji = is ? (e) => is.createHTML(e) : (e) => e,
  Jl = 'http://www.w3.org/2000/svg',
  Xl = 'http://www.w3.org/1998/Math/MathML',
  Ke = typeof document < 'u' ? document : null,
  er = Ke && Ke.createElement('template'),
  Zl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? Ke.createElementNS(Jl, e)
          : t === 'mathml'
            ? Ke.createElementNS(Xl, e)
            : n
              ? Ke.createElement(e, { is: n })
              : Ke.createElement(e)
      return (
        e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => Ke.createTextNode(e),
    createComment: (e) => Ke.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ke.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        er.innerHTML = ji(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e,
        )
        const l = er.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  ec = Symbol('_vtc')
function tc(e, t, n) {
  const s = e[ec]
  ;(s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t))
}
const tr = Symbol('_vod'),
  nc = Symbol('_vsh'),
  sc = Symbol(''),
  rc = /(?:^|;)\s*display\s*:/
function ic(e, t, n) {
  const s = e.style,
    r = se(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (se(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && pn(s, l, '')
        }
      else for (const o in t) n[o] == null && pn(s, o, '')
    for (const o in n) (o === 'display' && (i = !0), pn(s, o, n[o]))
  } else if (r) {
    if (t !== n) {
      const o = s[sc]
      ;(o && (n += ';' + o), (s.cssText = n), (i = rc.test(n)))
    }
  } else t && e.removeAttribute('style')
  tr in e && ((e[tr] = i ? s.display : ''), e[nc] && (s.display = 'none'))
}
const nr = /\s*!important$/
function pn(e, t, n) {
  if (B(n)) n.forEach((s) => pn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = oc(e, t)
    nr.test(n) ? e.setProperty(vt(s), n.replace(nr, ''), 'important') : (e[s] = n)
  }
}
const sr = ['Webkit', 'Moz', 'ms'],
  Wn = {}
function oc(e, t) {
  const n = Wn[t]
  if (n) return n
  let s = ct(t)
  if (s !== 'filter' && s in e) return (Wn[t] = s)
  s = Lr(s)
  for (let r = 0; r < sr.length; r++) {
    const i = sr[r] + s
    if (i in e) return (Wn[t] = i)
  }
  return t
}
const rr = 'http://www.w3.org/1999/xlink'
function ir(e, t, n, s, r, i = po(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(rr, t.slice(6, t.length))
      : e.setAttributeNS(rr, t, n)
    : n == null || (i && !Hr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : ft(n) ? String(n) : n)
}
function or(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? ji(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;((l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n))
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = Hr(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function lc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function cc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const lr = Symbol('_vei')
function uc(e, t, n, s, r = null) {
  const i = e[lr] || (e[lr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = fc(t)
    if (s) {
      const d = (i[t] = hc(s, r))
      lc(e, l, d, c)
    } else o && (cc(e, l, o, c), (i[t] = void 0))
  }
}
const cr = /(?:Once|Passive|Capture)$/
function fc(e) {
  let t
  if (cr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(cr)); )
      ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0))
  }
  return [e[2] === ':' ? e.slice(3) : vt(e.slice(2)), t]
}
let Gn = 0
const ac = Promise.resolve(),
  dc = () => Gn || (ac.then(() => (Gn = 0)), (Gn = Date.now()))
function hc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ve(pc(s, n.value), t, 5, [s])
  }
  return ((n.value = e), (n.attached = dc()), n)
}
function pc(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        ;(n.call(e), (e._stopped = !0))
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const ur = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  gc = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? tc(e, s, o)
      : t === 'style'
        ? ic(e, n, s)
        : Rn(t)
          ? ds(t) || uc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : mc(e, t, s, o)
              )
            ? (or(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                ir(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !se(s))
              ? or(e, ct(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                ir(e, t, s, o))
  }
function mc(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && ur(t) && j(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    (t === 'sandbox' && e.tagName === 'IFRAME') ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return ur(t) && se(n) ? !1 : t in e
}
const _c = oe({ patchProp: gc }, Zl)
let fr
function vc() {
  return fr || (fr = Tl(_c))
}
const yc = (...e) => {
  const t = vc().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Ec(s)
      if (!r) return
      const i = t._component
      ;(!j(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ''))
      const o = n(r, !1, bc(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        o
      )
    }),
    t
  )
}
function bc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Ec(e) {
  return se(e) ? document.querySelector(e) : e
}
const xc = Symbol()
var ar
;(function (e) {
  ;((e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function'))
})(ar || (ar = {}))
function Rc() {
  const e = go(!0),
    t = e.run(() => ri({}))
  let n = [],
    s = []
  const r = si({
    install(i) {
      ;((r._a = i),
        i.provide(xc, r),
        (i.config.globalProperties.$pinia = r),
        s.forEach((o) => n.push(o)),
        (s = []))
    },
    use(i) {
      return (this._a ? n.push(i) : s.push(i), this)
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return r
}
const Ac =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e"
const wt = typeof document < 'u'
function Vi(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function wc(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Vi(e.default))
}
const K = Object.assign
function Kn(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Ce(r) ? r.map(e) : e(r)
  }
  return n
}
const Yt = () => {},
  Ce = Array.isArray
function dr(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
const Ui = /#/g,
  Sc = /&/g,
  Cc = /\//g,
  Oc = /=/g,
  Pc = /\?/g,
  Wi = /\+/g,
  Ic = /%5B/g,
  Tc = /%5D/g,
  Gi = /%5E/g,
  Nc = /%60/g,
  Ki = /%7B/g,
  Mc = /%7C/g,
  ki = /%7D/g,
  Dc = /%20/g
function Ms(e) {
  return e == null
    ? ''
    : encodeURI('' + e)
        .replace(Mc, '|')
        .replace(Ic, '[')
        .replace(Tc, ']')
}
function Lc(e) {
  return Ms(e).replace(Ki, '{').replace(ki, '}').replace(Gi, '^')
}
function os(e) {
  return Ms(e)
    .replace(Wi, '%2B')
    .replace(Dc, '+')
    .replace(Ui, '%23')
    .replace(Sc, '%26')
    .replace(Nc, '`')
    .replace(Ki, '{')
    .replace(ki, '}')
    .replace(Gi, '^')
}
function Fc(e) {
  return os(e).replace(Oc, '%3D')
}
function Hc(e) {
  return Ms(e).replace(Ui, '%23').replace(Pc, '%3F')
}
function Bc(e) {
  return Hc(e).replace(Cc, '%2F')
}
function sn(e) {
  if (e == null) return null
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const jc = /\/$/,
  Vc = (e) => e.replace(jc, '')
function kn(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    (c = l >= 0 && c > l ? -1 : c),
    c >= 0 && ((s = t.slice(0, c)), (i = t.slice(c, l > 0 ? l : t.length)), (r = e(i.slice(1)))),
    l >= 0 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = Kc(s ?? t, n)),
    { fullPath: s + i + o, path: s, query: r, hash: sn(o) }
  )
}
function Uc(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function hr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Wc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Dt(t.matched[s], n.matched[r]) &&
    qi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Dt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function qi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (var n in e) if (!Gc(e[n], t[n])) return !1
  return !0
}
function Gc(e, t) {
  return Ce(e) ? pr(e, t) : Ce(t) ? pr(t, e) : e?.valueOf() === t?.valueOf()
}
function pr(e, t) {
  return Ce(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Kc(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let i = n.length - 1,
    o,
    l
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== '.'))
      if (l === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + s.slice(o).join('/')
}
const tt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
let ls = (function (e) {
    return ((e.pop = 'pop'), (e.push = 'push'), e)
  })({}),
  qn = (function (e) {
    return ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e)
  })({})
function kc(e) {
  if (!e)
    if (wt) {
      const t = document.querySelector('base')
      ;((e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, '')))
    } else e = '/'
  return (e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Vc(e))
}
const qc = /^[^#]+#/
function $c(e, t) {
  return e.replace(qc, '#') + t
}
function Qc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const Nn = () => ({ left: window.scrollX, top: window.scrollY })
function zc(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = Qc(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function gr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const cs = new Map()
function Yc(e, t) {
  cs.set(e, t)
}
function Jc(e) {
  const t = cs.get(e)
  return (cs.delete(e), t)
}
function Xc(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function $i(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
let te = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
    (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
    (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
    e
  )
})({})
const Qi = Symbol('')
;(te.MATCHER_NOT_FOUND + '',
  te.NAVIGATION_GUARD_REDIRECT + '',
  te.NAVIGATION_ABORTED + '',
  te.NAVIGATION_CANCELLED + '',
  te.NAVIGATION_DUPLICATED + '')
function Lt(e, t) {
  return K(new Error(), { type: e, [Qi]: !0 }, t)
}
function Ge(e, t) {
  return e instanceof Error && Qi in e && (t == null || !!(e.type & t))
}
const Zc = ['params', 'query', 'hash']
function eu(e) {
  if (typeof e == 'string') return e
  if (e.path != null) return e.path
  const t = {}
  for (const n of Zc) n in e && (t[n] = e[n])
  return JSON.stringify(t, null, 2)
}
function tu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < n.length; ++s) {
    const r = n[s].replace(Wi, ' '),
      i = r.indexOf('='),
      o = sn(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : sn(r.slice(i + 1))
    if (o in t) {
      let c = t[o]
      ;(Ce(c) || (c = t[o] = [c]), c.push(l))
    } else t[o] = l
  }
  return t
}
function mr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Fc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Ce(s) ? s.map((r) => r && os(r)) : [s && os(s)]).forEach((r) => {
      r !== void 0 && ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r))
    })
  }
  return t
}
function nu(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Ce(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const su = Symbol(''),
  _r = Symbol(''),
  Ds = Symbol(''),
  zi = Symbol(''),
  us = Symbol('')
function Vt() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function it(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((l, c) => {
      const d = (g) => {
          g === !1
            ? c(Lt(te.NAVIGATION_ABORTED, { from: n, to: t }))
            : g instanceof Error
              ? c(g)
              : Xc(g)
                ? c(Lt(te.NAVIGATION_GUARD_REDIRECT, { from: t, to: g }))
                : (o && s.enterCallbacks[r] === o && typeof g == 'function' && o.push(g), l())
        },
        f = i(() => e.call(s && s.instances[r], t, n, d))
      let h = Promise.resolve(f)
      ;(e.length < 3 && (h = h.then(d)), h.catch((g) => c(g)))
    })
}
function $n(e, t, n, s, r = (i) => i()) {
  const i = []
  for (const o of e)
    for (const l in o.components) {
      let c = o.components[l]
      if (!(t !== 'beforeRouteEnter' && !o.instances[l]))
        if (Vi(c)) {
          const d = (c.__vccOpts || c)[t]
          d && i.push(it(d, n, s, o, l, r))
        } else {
          let d = c()
          i.push(() =>
            d.then((f) => {
              if (!f) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`)
              const h = wc(f) ? f.default : f
              ;((o.mods[l] = f), (o.components[l] = h))
              const g = (h.__vccOpts || h)[t]
              return g && it(g, n, s, o, l, r)()
            }),
          )
        }
    }
  return i
}
function ru(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const l = t.matched[o]
    l && (e.matched.find((d) => Dt(d, l)) ? s.push(l) : n.push(l))
    const c = e.matched[o]
    c && (t.matched.find((d) => Dt(d, c)) || r.push(c))
  }
  return [n, s, r]
}
let iu = () => location.protocol + '//' + location.host
function Yi(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let o = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = r.slice(o)
    return (l[0] !== '/' && (l = '/' + l), hr(l, ''))
  }
  return hr(n, e) + s + r
}
function ou(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const l = ({ state: g }) => {
    const m = Yi(e, location),
      C = n.value,
      P = t.value
    let V = 0
    if (g) {
      if (((n.value = m), (t.value = g), o && o === C)) {
        o = null
        return
      }
      V = P ? g.position - P.position : 0
    } else s(m)
    r.forEach((N) => {
      N(n.value, C, {
        delta: V,
        type: ls.pop,
        direction: V ? (V > 0 ? qn.forward : qn.back) : qn.unknown,
      })
    })
  }
  function c() {
    o = n.value
  }
  function d(g) {
    r.push(g)
    const m = () => {
      const C = r.indexOf(g)
      C > -1 && r.splice(C, 1)
    }
    return (i.push(m), m)
  }
  function f() {
    if (document.visibilityState === 'hidden') {
      const { history: g } = window
      if (!g.state) return
      g.replaceState(K({}, g.state, { scroll: Nn() }), '')
    }
  }
  function h() {
    for (const g of i) g()
    ;((i = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('pagehide', f),
      document.removeEventListener('visibilitychange', f))
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('pagehide', f),
    document.addEventListener('visibilitychange', f),
    { pauseListeners: c, listen: d, destroy: h }
  )
}
function vr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Nn() : null,
  }
}
function lu(e) {
  const { history: t, location: n } = window,
    s = { value: Yi(e, n) },
    r = { value: t.state }
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function i(c, d, f) {
    const h = e.indexOf('#'),
      g = h > -1 ? (n.host && document.querySelector('base') ? e : e.slice(h)) + c : iu() + e + c
    try {
      ;(t[f ? 'replaceState' : 'pushState'](d, '', g), (r.value = d))
    } catch (m) {
      ;(console.error(m), n[f ? 'replace' : 'assign'](g))
    }
  }
  function o(c, d) {
    ;(i(
      c,
      K({}, t.state, vr(r.value.back, c, r.value.forward, !0), d, { position: r.value.position }),
      !0,
    ),
      (s.value = c))
  }
  function l(c, d) {
    const f = K({}, r.value, t.state, { forward: c, scroll: Nn() })
    ;(i(f.current, f, !0),
      i(c, K({}, vr(s.value, c, null), { position: f.position + 1 }, d), !1),
      (s.value = c))
  }
  return { location: s, state: r, push: l, replace: o }
}
function cu(e) {
  e = kc(e)
  const t = lu(e),
    n = ou(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    ;(o || n.pauseListeners(), history.go(i))
  }
  const r = K({ location: '', base: e, go: s, createHref: $c.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
let mt = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.Group = 2)] = 'Group'),
    e
  )
})({})
var ne = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
    (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
    (e[(e.EscapeNext = 4)] = 'EscapeNext'),
    e
  )
})(ne || {})
const uu = { type: mt.Static, value: '' },
  fu = /[a-zA-Z0-9_]/
function au(e) {
  if (!e) return [[]]
  if (e === '/') return [[uu]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${d}": ${m}`)
  }
  let n = ne.Static,
    s = n
  const r = []
  let i
  function o() {
    ;(i && r.push(i), (i = []))
  }
  let l = 0,
    c,
    d = '',
    f = ''
  function h() {
    d &&
      (n === ne.Static
        ? i.push({ type: mt.Static, value: d })
        : n === ne.Param || n === ne.ParamRegExp || n === ne.ParamRegExpEnd
          ? (i.length > 1 &&
              (c === '*' || c === '+') &&
              t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: mt.Param,
              value: d,
              regexp: f,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?',
            }))
          : t('Invalid state to consume buffer'),
      (d = ''))
  }
  function g() {
    d += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== ne.ParamRegExp)) {
      ;((s = n), (n = ne.EscapeNext))
      continue
    }
    switch (n) {
      case ne.Static:
        c === '/' ? (d && h(), o()) : c === ':' ? (h(), (n = ne.Param)) : g()
        break
      case ne.EscapeNext:
        ;(g(), (n = s))
        break
      case ne.Param:
        c === '('
          ? (n = ne.ParamRegExp)
          : fu.test(c)
            ? g()
            : (h(), (n = ne.Static), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case ne.ParamRegExp:
        c === ')'
          ? f[f.length - 1] == '\\'
            ? (f = f.slice(0, -1) + c)
            : (n = ne.ParamRegExpEnd)
          : (f += c)
        break
      case ne.ParamRegExpEnd:
        ;(h(), (n = ne.Static), c !== '*' && c !== '?' && c !== '+' && l--, (f = ''))
        break
      default:
        t('Unknown state')
        break
    }
  }
  return (n === ne.ParamRegExp && t(`Unfinished custom RegExp for param "${d}"`), h(), o(), r)
}
const yr = '[^/]+?',
  du = { sensitive: !1, strict: !1, start: !0, end: !0 }
var fe = (function (e) {
  return (
    (e[(e._multiplier = 10)] = '_multiplier'),
    (e[(e.Root = 90)] = 'Root'),
    (e[(e.Segment = 40)] = 'Segment'),
    (e[(e.SubSegment = 30)] = 'SubSegment'),
    (e[(e.Static = 40)] = 'Static'),
    (e[(e.Dynamic = 20)] = 'Dynamic'),
    (e[(e.BonusCustomRegExp = 10)] = 'BonusCustomRegExp'),
    (e[(e.BonusWildcard = -50)] = 'BonusWildcard'),
    (e[(e.BonusRepeatable = -20)] = 'BonusRepeatable'),
    (e[(e.BonusOptional = -8)] = 'BonusOptional'),
    (e[(e.BonusStrict = 0.7000000000000001)] = 'BonusStrict'),
    (e[(e.BonusCaseSensitive = 0.25)] = 'BonusCaseSensitive'),
    e
  )
})(fe || {})
const hu = /[.+*?^${}()[\]/\\]/g
function pu(e, t) {
  const n = K({}, du, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const d of e) {
    const f = d.length ? [] : [fe.Root]
    n.strict && !d.length && (r += '/')
    for (let h = 0; h < d.length; h++) {
      const g = d[h]
      let m = fe.Segment + (n.sensitive ? fe.BonusCaseSensitive : 0)
      if (g.type === mt.Static)
        (h || (r += '/'), (r += g.value.replace(hu, '\\$&')), (m += fe.Static))
      else if (g.type === mt.Param) {
        const { value: C, repeatable: P, optional: V, regexp: N } = g
        i.push({ name: C, repeatable: P, optional: V })
        const I = N || yr
        if (I !== yr) {
          m += fe.BonusCustomRegExp
          try {
            ;`${I}`
          } catch (T) {
            throw new Error(`Invalid custom RegExp for param "${C}" (${I}): ` + T.message)
          }
        }
        let L = P ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`
        ;(h || (L = V && d.length < 2 ? `(?:/${L})` : '/' + L),
          V && (L += '?'),
          (r += L),
          (m += fe.Dynamic),
          V && (m += fe.BonusOptional),
          P && (m += fe.BonusRepeatable),
          I === '.*' && (m += fe.BonusWildcard))
      }
      f.push(m)
    }
    s.push(f)
  }
  if (n.strict && n.end) {
    const d = s.length - 1
    s[d][s[d].length - 1] += fe.BonusStrict
  }
  ;(n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)'))
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function l(d) {
    const f = d.match(o),
      h = {}
    if (!f) return null
    for (let g = 1; g < f.length; g++) {
      const m = f[g] || '',
        C = i[g - 1]
      h[C.name] = m && C.repeatable ? m.split('/') : m
    }
    return h
  }
  function c(d) {
    let f = '',
      h = !1
    for (const g of e) {
      ;((!h || !f.endsWith('/')) && (f += '/'), (h = !1))
      for (const m of g)
        if (m.type === mt.Static) f += m.value
        else if (m.type === mt.Param) {
          const { value: C, repeatable: P, optional: V } = m,
            N = C in d ? d[C] : ''
          if (Ce(N) && !P)
            throw new Error(
              `Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const I = Ce(N) ? N.join('/') : N
          if (!I)
            if (V) g.length < 2 && (f.endsWith('/') ? (f = f.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${C}"`)
          f += I
        }
    }
    return f || '/'
  }
  return { re: o, score: s, keys: i, parse: l, stringify: c }
}
function gu(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === fe.Static + fe.Segment
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === fe.Static + fe.Segment
        ? 1
        : -1
      : 0
}
function Ji(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = gu(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (br(s)) return 1
    if (br(r)) return -1
  }
  return r.length - s.length
}
function br(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const mu = { strict: !1, end: !0, sensitive: !1 }
function _u(e, t, n) {
  const s = pu(au(e.path), n),
    r = K(s, { record: e, parent: t, children: [], alias: [] })
  return (t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r)
}
function vu(e, t) {
  const n = [],
    s = new Map()
  t = dr(mu, t)
  function r(h) {
    return s.get(h)
  }
  function i(h, g, m) {
    const C = !m,
      P = xr(h)
    P.aliasOf = m && m.record
    const V = dr(t, h),
      N = [P]
    if ('alias' in h) {
      const T = typeof h.alias == 'string' ? [h.alias] : h.alias
      for (const z of T)
        N.push(
          xr(
            K({}, P, {
              components: m ? m.record.components : P.components,
              path: z,
              aliasOf: m ? m.record : P,
            }),
          ),
        )
    }
    let I, L
    for (const T of N) {
      const { path: z } = T
      if (g && z[0] !== '/') {
        const ie = g.record.path,
          ee = ie[ie.length - 1] === '/' ? '' : '/'
        T.path = g.record.path + (z && ee + z)
      }
      if (
        ((I = _u(T, g, V)),
        m
          ? m.alias.push(I)
          : ((L = L || I), L !== I && L.alias.push(I), C && h.name && !Rr(I) && o(h.name)),
        Xi(I) && c(I),
        P.children)
      ) {
        const ie = P.children
        for (let ee = 0; ee < ie.length; ee++) i(ie[ee], I, m && m.children[ee])
      }
      m = m || I
    }
    return L
      ? () => {
          o(L)
        }
      : Yt
  }
  function o(h) {
    if ($i(h)) {
      const g = s.get(h)
      g && (s.delete(h), n.splice(n.indexOf(g), 1), g.children.forEach(o), g.alias.forEach(o))
    } else {
      const g = n.indexOf(h)
      g > -1 &&
        (n.splice(g, 1),
        h.record.name && s.delete(h.record.name),
        h.children.forEach(o),
        h.alias.forEach(o))
    }
  }
  function l() {
    return n
  }
  function c(h) {
    const g = Eu(h, n)
    ;(n.splice(g, 0, h), h.record.name && !Rr(h) && s.set(h.record.name, h))
  }
  function d(h, g) {
    let m,
      C = {},
      P,
      V
    if ('name' in h && h.name) {
      if (((m = s.get(h.name)), !m)) throw Lt(te.MATCHER_NOT_FOUND, { location: h })
      ;((V = m.record.name),
        (C = K(
          Er(
            g.params,
            m.keys
              .filter((L) => !L.optional)
              .concat(m.parent ? m.parent.keys.filter((L) => L.optional) : [])
              .map((L) => L.name),
          ),
          h.params &&
            Er(
              h.params,
              m.keys.map((L) => L.name),
            ),
        )),
        (P = m.stringify(C)))
    } else if (h.path != null)
      ((P = h.path),
        (m = n.find((L) => L.re.test(P))),
        m && ((C = m.parse(P)), (V = m.record.name)))
    else {
      if (((m = g.name ? s.get(g.name) : n.find((L) => L.re.test(g.path))), !m))
        throw Lt(te.MATCHER_NOT_FOUND, { location: h, currentLocation: g })
      ;((V = m.record.name), (C = K({}, g.params, h.params)), (P = m.stringify(C)))
    }
    const N = []
    let I = m
    for (; I; ) (N.unshift(I.record), (I = I.parent))
    return { name: V, path: P, params: C, matched: N, meta: bu(N) }
  }
  e.forEach((h) => i(h))
  function f() {
    ;((n.length = 0), s.clear())
  }
  return {
    addRoute: i,
    resolve: d,
    removeRoute: o,
    clearRoutes: f,
    getRoutes: l,
    getRecordMatcher: r,
  }
}
function Er(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function xr(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: yu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return (Object.defineProperty(t, 'mods', { value: {} }), t)
}
function yu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Rr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function bu(e) {
  return e.reduce((t, n) => K(t, n.meta), {})
}
function Eu(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    Ji(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = xu(e)
  return (r && (s = t.lastIndexOf(r, s - 1)), s)
}
function xu(e) {
  let t = e
  for (; (t = t.parent); ) if (Xi(t) && Ji(e, t) === 0) return t
}
function Xi({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function Ar(e) {
  const t = $e(Ds),
    n = $e(zi),
    s = Re(() => {
      const c = qe(e.to)
      return t.resolve(c)
    }),
    r = Re(() => {
      const { matched: c } = s.value,
        { length: d } = c,
        f = c[d - 1],
        h = n.matched
      if (!f || !h.length) return -1
      const g = h.findIndex(Dt.bind(null, f))
      if (g > -1) return g
      const m = wr(c[d - 2])
      return d > 1 && wr(f) === m && h[h.length - 1].path !== m
        ? h.findIndex(Dt.bind(null, c[d - 2]))
        : g
    }),
    i = Re(() => r.value > -1 && Su(n.params, s.value.params)),
    o = Re(() => r.value > -1 && r.value === n.matched.length - 1 && qi(n.params, s.value.params))
  function l(c = {}) {
    if (wu(c)) {
      const d = t[qe(e.replace) ? 'replace' : 'push'](qe(e.to)).catch(Yt)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => d),
        d
      )
    }
    return Promise.resolve()
  }
  return { route: s, href: Re(() => s.value.href), isActive: i, isExactActive: o, navigate: l }
}
function Ru(e) {
  return e.length === 1 ? e[0] : e
}
const Au = on({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: Ar,
    setup(e, { slots: t }) {
      const n = Cn(Ar(e)),
        { options: s } = $e(Ds),
        r = Re(() => ({
          [Sr(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [Sr(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const i = t.default && Ru(t.default(n))
        return e.custom
          ? i
          : Bi(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i,
            )
      }
    },
  }),
  fs = Au
function wu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return (e.preventDefault && e.preventDefault(), !0)
  }
}
function Su(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Ce(r) || r.length !== s.length || s.some((i, o) => i.valueOf() !== r[o].valueOf()))
      return !1
  }
  return !0
}
function wr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Sr = (e, t, n) => e ?? t ?? n,
  Cu = on({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = $e(us),
        r = Re(() => e.route || s.value),
        i = $e(_r, 0),
        o = Re(() => {
          let d = qe(i)
          const { matched: f } = r.value
          let h
          for (; (h = f[d]) && !h.components; ) d++
          return d
        }),
        l = Re(() => r.value.matched[o.value])
      ;(an(
        _r,
        Re(() => o.value + 1),
      ),
        an(su, l),
        an(us, r))
      const c = ri()
      return (
        dn(
          () => [c.value, l.value, e.name],
          ([d, f, h], [g, m, C]) => {
            ;(f &&
              ((f.instances[h] = d),
              m &&
                m !== f &&
                d &&
                d === g &&
                (f.leaveGuards.size || (f.leaveGuards = m.leaveGuards),
                f.updateGuards.size || (f.updateGuards = m.updateGuards))),
              d && f && (!m || !Dt(f, m) || !g) && (f.enterCallbacks[h] || []).forEach((P) => P(d)))
          },
          { flush: 'post' },
        ),
        () => {
          const d = r.value,
            f = e.name,
            h = l.value,
            g = h && h.components[f]
          if (!g) return Cr(n.default, { Component: g, route: d })
          const m = h.props[f],
            C = m ? (m === !0 ? d.params : typeof m == 'function' ? m(d) : m) : null,
            V = Bi(
              g,
              K({}, C, t, {
                onVnodeUnmounted: (N) => {
                  N.component.isUnmounted && (h.instances[f] = null)
                },
                ref: c,
              }),
            )
          return Cr(n.default, { Component: V, route: d }) || V
        }
      )
    },
  })
function Cr(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Zi = Cu
function Ou(e) {
  const t = vu(e.routes, e),
    n = e.parseQuery || tu,
    s = e.stringifyQuery || mr,
    r = e.history,
    i = Vt(),
    o = Vt(),
    l = Vt(),
    c = Lo(tt)
  let d = tt
  wt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const f = Kn.bind(null, (y) => '' + y),
    h = Kn.bind(null, Bc),
    g = Kn.bind(null, sn)
  function m(y, O) {
    let w, M
    return ($i(y) ? ((w = t.getRecordMatcher(y)), (M = O)) : (M = y), t.addRoute(M, w))
  }
  function C(y) {
    const O = t.getRecordMatcher(y)
    O && t.removeRoute(O)
  }
  function P() {
    return t.getRoutes().map((y) => y.record)
  }
  function V(y) {
    return !!t.getRecordMatcher(y)
  }
  function N(y, O) {
    if (((O = K({}, O || c.value)), typeof y == 'string')) {
      const p = kn(n, y, O.path),
        _ = t.resolve({ path: p.path }, O),
        b = r.createHref(p.fullPath)
      return K(p, _, { params: g(_.params), hash: sn(p.hash), redirectedFrom: void 0, href: b })
    }
    let w
    if (y.path != null) w = K({}, y, { path: kn(n, y.path, O.path).path })
    else {
      const p = K({}, y.params)
      for (const _ in p) p[_] == null && delete p[_]
      ;((w = K({}, y, { params: h(p) })), (O.params = h(O.params)))
    }
    const M = t.resolve(w, O),
      U = y.hash || ''
    M.params = f(g(M.params))
    const u = Uc(s, K({}, y, { hash: Lc(U), path: M.path })),
      a = r.createHref(u)
    return K({ fullPath: u, hash: U, query: s === mr ? nu(y.query) : y.query || {} }, M, {
      redirectedFrom: void 0,
      href: a,
    })
  }
  function I(y) {
    return typeof y == 'string' ? kn(n, y, c.value.path) : K({}, y)
  }
  function L(y, O) {
    if (d !== y) return Lt(te.NAVIGATION_CANCELLED, { from: O, to: y })
  }
  function T(y) {
    return ee(y)
  }
  function z(y) {
    return T(K(I(y), { replace: !0 }))
  }
  function ie(y, O) {
    const w = y.matched[y.matched.length - 1]
    if (w && w.redirect) {
      const { redirect: M } = w
      let U = typeof M == 'function' ? M(y, O) : M
      return (
        typeof U == 'string' &&
          ((U = U.includes('?') || U.includes('#') ? (U = I(U)) : { path: U }), (U.params = {})),
        K({ query: y.query, hash: y.hash, params: U.path != null ? {} : y.params }, U)
      )
    }
  }
  function ee(y, O) {
    const w = (d = N(y)),
      M = c.value,
      U = y.state,
      u = y.force,
      a = y.replace === !0,
      p = ie(w, M)
    if (p)
      return ee(
        K(I(p), { state: typeof p == 'object' ? K({}, U, p.state) : U, force: u, replace: a }),
        O || w,
      )
    const _ = w
    _.redirectedFrom = O
    let b
    return (
      !u &&
        Wc(s, M, w) &&
        ((b = Lt(te.NAVIGATION_DUPLICATED, { to: _, from: M })), Te(M, M, !0, !1)),
      (b ? Promise.resolve(b) : Pe(_, M))
        .catch((v) => (Ge(v) ? (Ge(v, te.NAVIGATION_GUARD_REDIRECT) ? v : et(v)) : G(v, _, M)))
        .then((v) => {
          if (v) {
            if (Ge(v, te.NAVIGATION_GUARD_REDIRECT))
              return ee(
                K({ replace: a }, I(v.to), {
                  state: typeof v.to == 'object' ? K({}, U, v.to.state) : U,
                  force: u,
                }),
                O || _,
              )
          } else v = at(_, M, !0, a, U)
          return (Ze(_, M, v), v)
        })
    )
  }
  function Oe(y, O) {
    const w = L(y, O)
    return w ? Promise.reject(w) : Promise.resolve()
  }
  function Xe(y) {
    const O = Et.values().next().value
    return O && typeof O.runWithContext == 'function' ? O.runWithContext(y) : y()
  }
  function Pe(y, O) {
    let w
    const [M, U, u] = ru(y, O)
    w = $n(M.reverse(), 'beforeRouteLeave', y, O)
    for (const p of M)
      p.leaveGuards.forEach((_) => {
        w.push(it(_, y, O))
      })
    const a = Oe.bind(null, y, O)
    return (
      w.push(a),
      Ee(w)
        .then(() => {
          w = []
          for (const p of i.list()) w.push(it(p, y, O))
          return (w.push(a), Ee(w))
        })
        .then(() => {
          w = $n(U, 'beforeRouteUpdate', y, O)
          for (const p of U)
            p.updateGuards.forEach((_) => {
              w.push(it(_, y, O))
            })
          return (w.push(a), Ee(w))
        })
        .then(() => {
          w = []
          for (const p of u)
            if (p.beforeEnter)
              if (Ce(p.beforeEnter)) for (const _ of p.beforeEnter) w.push(it(_, y, O))
              else w.push(it(p.beforeEnter, y, O))
          return (w.push(a), Ee(w))
        })
        .then(
          () => (
            y.matched.forEach((p) => (p.enterCallbacks = {})),
            (w = $n(u, 'beforeRouteEnter', y, O, Xe)),
            w.push(a),
            Ee(w)
          ),
        )
        .then(() => {
          w = []
          for (const p of o.list()) w.push(it(p, y, O))
          return (w.push(a), Ee(w))
        })
        .catch((p) => (Ge(p, te.NAVIGATION_CANCELLED) ? p : Promise.reject(p)))
    )
  }
  function Ze(y, O, w) {
    l.list().forEach((M) => Xe(() => M(y, O, w)))
  }
  function at(y, O, w, M, U) {
    const u = L(y, O)
    if (u) return u
    const a = O === tt,
      p = wt ? history.state : {}
    ;(w &&
      (M || a
        ? r.replace(y.fullPath, K({ scroll: a && p && p.scroll }, U))
        : r.push(y.fullPath, U)),
      (c.value = y),
      Te(y, O, w, a),
      et())
  }
  let Ie
  function Ft() {
    Ie ||
      (Ie = r.listen((y, O, w) => {
        if (!dt.listening) return
        const M = N(y),
          U = ie(M, dt.currentRoute.value)
        if (U) {
          ee(K(U, { replace: !0, force: !0 }), M).catch(Yt)
          return
        }
        d = M
        const u = c.value
        ;(wt && Yc(gr(u.fullPath, w.delta), Nn()),
          Pe(M, u)
            .catch((a) =>
              Ge(a, te.NAVIGATION_ABORTED | te.NAVIGATION_CANCELLED)
                ? a
                : Ge(a, te.NAVIGATION_GUARD_REDIRECT)
                  ? (ee(K(I(a.to), { force: !0 }), M)
                      .then((p) => {
                        Ge(p, te.NAVIGATION_ABORTED | te.NAVIGATION_DUPLICATED) &&
                          !w.delta &&
                          w.type === ls.pop &&
                          r.go(-1, !1)
                      })
                      .catch(Yt),
                    Promise.reject())
                  : (w.delta && r.go(-w.delta, !1), G(a, M, u)),
            )
            .then((a) => {
              ;((a = a || at(M, u, !1)),
                a &&
                  (w.delta && !Ge(a, te.NAVIGATION_CANCELLED)
                    ? r.go(-w.delta, !1)
                    : w.type === ls.pop &&
                      Ge(a, te.NAVIGATION_ABORTED | te.NAVIGATION_DUPLICATED) &&
                      r.go(-1, !1)),
                Ze(M, u, a))
            })
            .catch(Yt))
      }))
  }
  let yt = Vt(),
    re = Vt(),
    Q
  function G(y, O, w) {
    et(y)
    const M = re.list()
    return (M.length ? M.forEach((U) => U(y, O, w)) : console.error(y), Promise.reject(y))
  }
  function Ue() {
    return Q && c.value !== tt
      ? Promise.resolve()
      : new Promise((y, O) => {
          yt.add([y, O])
        })
  }
  function et(y) {
    return (Q || ((Q = !y), Ft(), yt.list().forEach(([O, w]) => (y ? w(y) : O())), yt.reset()), y)
  }
  function Te(y, O, w, M) {
    const { scrollBehavior: U } = e
    if (!wt || !U) return Promise.resolve()
    const u =
      (!w && Jc(gr(y.fullPath, 0))) || ((M || !w) && history.state && history.state.scroll) || null
    return ci()
      .then(() => U(y, O, u))
      .then((a) => a && zc(a))
      .catch((a) => G(a, y, O))
  }
  const pe = (y) => r.go(y)
  let bt
  const Et = new Set(),
    dt = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: C,
      clearRoutes: t.clearRoutes,
      hasRoute: V,
      getRoutes: P,
      resolve: N,
      options: e,
      push: T,
      replace: z,
      go: pe,
      back: () => pe(-1),
      forward: () => pe(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: re.add,
      isReady: Ue,
      install(y) {
        ;(y.component('RouterLink', fs),
          y.component('RouterView', Zi),
          (y.config.globalProperties.$router = dt),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => qe(c),
          }),
          wt && !bt && c.value === tt && ((bt = !0), T(r.location).catch((M) => {})))
        const O = {}
        for (const M in tt) Object.defineProperty(O, M, { get: () => c.value[M], enumerable: !0 })
        ;(y.provide(Ds, dt), y.provide(zi, ni(O)), y.provide(us, c))
        const w = y.unmount
        ;(Et.add(y),
          (y.unmount = function () {
            ;(Et.delete(y),
              Et.size < 1 &&
                ((d = tt), Ie && Ie(), (Ie = null), (c.value = tt), (bt = !1), (Q = !1)),
              w())
          }))
      },
    }
  function Ee(y) {
    return y.reduce((O, w) => O.then(() => Xe(w)), Promise.resolve())
  }
  return dt
}
const Pu = { class: 'greetings' },
  Iu = { class: 'green' },
  Tu = on({
    __name: 'HelloWorld',
    props: { msg: {} },
    setup(e) {
      return (t, n) => (
        Ps(),
        Is('div', Pu, [
          Ae('h1', Iu, jr(e.msg), 1),
          n[0] ||
            (n[0] = Ae(
              'h3',
              null,
              [
                Tt(' You’ve successfully created a project with '),
                Ae('a', { href: 'https://vite.dev/', target: '_blank', rel: 'noopener' }, 'Vite'),
                Tt(' + '),
                Ae('a', { href: 'https://vuejs.org/', target: '_blank', rel: 'noopener' }, 'Vue 3'),
                Tt(". What's next? "),
              ],
              -1,
            )),
        ])
      )
    },
  }),
  eo = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  Nu = eo(Tu, [['__scopeId', 'data-v-d1bb330e']]),
  Mu = { class: 'wrapper' },
  Du = on({
    __name: 'App',
    setup(e) {
      return (t, n) => (
        Ps(),
        Is(
          xe,
          null,
          [
            Ae('header', null, [
              n[2] ||
                (n[2] = Ae(
                  'img',
                  { alt: 'Vue logo', class: 'logo', src: Ac, width: '125', height: '125' },
                  null,
                  -1,
                )),
              Ae('div', Mu, [
                he(Nu, { msg: 'You did it!' }),
                Ae('nav', null, [
                  he(
                    qe(fs),
                    { to: '/app-vue' },
                    { default: Zn(() => [...(n[0] || (n[0] = [Tt('Home', -1)]))]), _: 1 },
                  ),
                  he(
                    qe(fs),
                    { to: '/app-vue/about' },
                    { default: Zn(() => [...(n[1] || (n[1] = [Tt('About', -1)]))]), _: 1 },
                  ),
                ]),
              ]),
            ]),
            he(qe(Zi)),
          ],
          64,
        )
      )
    },
  }),
  Lu = eo(Du, [['__scopeId', 'data-v-50ab7b41']]),
  Fu = 'modulepreload',
  Hu = function (e) {
    return '/child/vue-history/' + e
  },
  Or = {},
  Bu = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      let c = function (d) {
        return Promise.all(
          d.map((f) =>
            Promise.resolve(f).then(
              (h) => ({ status: 'fulfilled', value: h }),
              (h) => ({ status: 'rejected', reason: h }),
            ),
          ),
        )
      }
      document.getElementsByTagName('link')
      const o = document.querySelector('meta[property=csp-nonce]'),
        l = o?.nonce || o?.getAttribute('nonce')
      r = c(
        n.map((d) => {
          if (((d = Hu(d)), d in Or)) return
          Or[d] = !0
          const f = d.endsWith('.css'),
            h = f ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${d}"]${h}`)) return
          const g = document.createElement('link')
          if (
            ((g.rel = f ? 'stylesheet' : Fu),
            f || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = d),
            l && g.setAttribute('nonce', l),
            document.head.appendChild(g),
            f)
          )
            return new Promise((m, C) => {
              ;(g.addEventListener('load', m),
                g.addEventListener('error', () => C(new Error(`Unable to preload CSS for ${d}`))))
            })
        }),
      )
    }
    function i(o) {
      const l = new Event('vite:preloadError', { cancelable: !0 })
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented)) throw o
    }
    return r.then((o) => {
      for (const l of o || []) l.status === 'rejected' && i(l.reason)
      return t().catch(i)
    })
  },
  ju = on({
    __name: 'HomeView',
    setup(e) {
      return (t, n) => (
        Ps(),
        Is('main', null, [...(n[0] || (n[0] = [Ae('h1', null, '子应用 Vue Home', -1)]))])
      )
    },
  }),
  Vu = Ou({
    history: cu(),
    routes: [
      { path: '/app-vue', name: 'home', component: ju },
      {
        path: '/app-vue/about',
        name: 'about',
        component: () => Bu(() => import('./AboutView-keVwyc8A.js'), __vite__mapDeps([0, 1])),
      },
    ],
  })
var Rt = {}
var Pr
function Uu() {
  if (Pr) return Rt
  ;((Pr = 1), Object.defineProperty(Rt, '__esModule', { value: !0 }))
  var e = typeof window < 'u' ? window.proxy || window : {},
    t = function (n) {
      e?.__POWERED_BY_QIANKUN__ &&
        (window.moudleQiankunAppLifeCycles || (window.moudleQiankunAppLifeCycles = {}),
        e.qiankunName && (window.moudleQiankunAppLifeCycles[e.qiankunName] = n))
    }
  return ((Rt.default = t), (Rt.qiankunWindow = e), (Rt.renderWithQiankun = t), Rt)
}
var to = Uu()
let Wt
function no(e = {}) {
  const { container: t } = e
  ;((Wt = yc(Lu)), Wt.use(Rc()), Wt.use(Vu), Wt.mount(t ? t.querySelector('#app') : '#app'))
}
to.qiankunWindow.__POWERED_BY_QIANKUN__ || no()
to.renderWithQiankun({
  bootstrap() {
    console.log('[vue] vue app bootstraped')
  },
  mount(e) {
    ;(console.log('[vue] props from main framework', e), no(e))
  },
  unmount(e) {
    ;(console.log('[vue] app will unmount'), Wt.unmount())
  },
  update(e) {
    console.log('vite update: ', e)
  },
})
export { eo as _, Ae as a, Is as c, Ps as o }
