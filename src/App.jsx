import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown,
  Clock3, Coins, Globe2, Headphones, LockKeyhole, Menu, MessageCircle,
  MessageSquareText, ShieldCheck, Sparkles, TrendingUp, X, Zap
} from 'lucide-react'
import { TELEGRAM_URL } from './config'

const ASSET = '/assets/'
const navigation = [
  { label: 'О нас', href: '#about' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'География', href: '#world' },
  { label: 'Контакты', href: '#contacts' },
]

const benefits = [
  {
    title: 'Быстрый обмен',
    description: 'Ценим ваше время. Помогаем оперативно согласовать условия и провести обмен.',
    illustration: 'speed',
    number: '01',
  },
  {
    title: 'Полная конфиденциальность',
    description: 'Бережно относимся к личной информации и соблюдаем конфиденциальность общения.',
    illustration: 'lock',
    number: '02',
  },
  {
    title: 'Безопасность и надёжность',
    description: 'Прозрачный порядок сделки и сопровождение менеджера на каждом этапе.',
    illustration: 'shield',
    number: '03',
  },
  {
    title: 'Выгодный курс обмена',
    description: 'Подбираем актуальные предложения с учётом валюты, суммы и направления обмена.',
    illustration: 'rates',
    number: '04',
  },
]

const faqs = [
  {
    question: 'Как происходит обмен криптовалюты?',
    answer: 'Напишите менеджеру в Telegram, укажите валюту, сумму и город. Вам сообщат доступные направления, актуальный курс и порядок проведения обмена. Сделка проводится после согласования условий.',
  },
  {
    question: 'Безопасно ли совершать обмен?',
    answer: 'Менеджер заранее объяснит условия и последовательность действий. Перед переводом средств обязательно сверяйте реквизиты и детали операции непосредственно в официальном чате.',
  },
  {
    question: 'Сколько времени занимает обмен?',
    answer: 'Срок зависит от валюты, сети, суммы и выбранного способа расчёта. Ориентировочное время менеджер сообщит до подтверждения сделки.',
  },
  {
    question: 'Какие способы обмена доступны?',
    answer: 'Доступные способы зависят от страны и города. Уточните у менеджера варианты обмена криптовалюты на фиатные средства и обратно для вашей локации.',
  },
  {
    question: 'Какие криптовалюты вы поддерживаете?',
    answer: 'В первую очередь можно уточнить направления с USDT, BTC и ETH. По другим активам и сетям менеджер сообщит возможность обмена индивидуально.',
  },
  {
    question: 'Работаете ли вы с клиентами из моей страны?',
    answer: 'Сервис ориентирован на международные запросы. Возможность конкретной сделки зависит от страны и применимых правил. Уточните доступность обмена и наличие офиса в вашем городе у менеджера.',
  },
  {
    question: 'Нужна ли верификация?',
    answer: 'Требования зависят от направления, суммы, юрисдикции и применимых правил. Менеджер заранее сообщит, какие данные могут понадобиться.',
  },
  {
    question: 'Как узнать актуальный курс?',
    answer: 'Нажмите «Связаться с менеджером» и отправьте валютную пару и сумму. Вам сообщат доступный курс и возможные комиссии до проведения операции.',
  },
]

function TelegramIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m21.8 3.28-3.1 17.2c-.24 1.22-.86 1.51-1.76.94l-4.77-3.49-2.3 2.2c-.25.25-.46.46-.94.46l.33-4.84L18.1 7.8c.38-.34-.08-.53-.58-.19L6.63 14.5l-4.7-1.47c-1.03-.32-1.05-1.03.22-1.52L20.52 2.3c.86-.32 1.61.2 1.28.98Z" fill="currentColor"/></svg>
}

function CTA({ children = 'Связаться с менеджером', className = '', icon = true }) {
  return (
    <a className={`cta ${className}`} href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={`${children} — Telegram, откроется в новой вкладке`}>
      {icon && <span className="cta__chat"><MessageSquareText size={18} strokeWidth={2.6}/></span>}
      <span>{children}</span>
      <ArrowUpRight size={20} strokeWidth={2.4} className="cta__arrow" />
    </a>
  )
}

function Logo({ small = false }) {
  return (
    <a
      href="#top"
      className={`brand ${small ? 'brand--small' : ''}`}
      aria-label="EXCHANGE BURO PAY, наверх"
    >
      <img
        src={`${ASSET}logo.png`}
        alt="EXCHANGE BURO PAY"
        width="1176"
        height="288"
      />
    </a>
  )
}

function FeatureArt({ type }) {
  const common = { fill: 'none', stroke: 'url(#line)', strokeWidth: 5, strokeLinejoin: 'round', strokeLinecap: 'round' }
  return (
    <svg className={`feature-svg feature-svg--${type}`} viewBox="0 0 230 170" aria-hidden="true">
      <defs>
        <radialGradient id={`floor-${type}`}><stop stopColor="#79f863" stopOpacity=".27"/><stop offset="1" stopColor="#57d998" stopOpacity="0"/></radialGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ebffb0"/><stop offset=".55" stopColor="#a0ff56"/><stop offset="1" stopColor="#0fc28d"/></linearGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b6ff9d"/><stop offset=".45" stopColor="#266a52"/><stop offset="1" stopColor="#072c26"/></linearGradient>
        <filter id={`fg-${type}`} x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>
      <ellipse cx="115" cy="143" rx="102" ry="24" fill={`url(#floor-${type})`}/>
      <ellipse cx="115" cy="139" rx="83" ry="19" stroke="#76eb79" strokeOpacity=".30" strokeWidth="1.5" fill="none"/>
      <ellipse cx="115" cy="138" rx="62" ry="12" stroke="#88f991" strokeOpacity=".22" strokeWidth="1.2" fill="none"/>
      {type === 'speed' && <>
        <path d="M120 18 76 92h39l-7 55 55-83h-41l-2-46Z" fill="#7aff3f" opacity=".35" filter={`url(#fg-${type})`}/>
        <path d="M120 18 76 92h39l-7 55 55-83h-41l-2-46Z" fill="url(#metal)" {...common}/>
        <path d="M120 18 107 82h43L108 146" stroke="#d9ffb2" strokeOpacity=".85" strokeWidth="2"/>
        <path d="m57 55 9-6m100 55 10-4M74 117l-7 11" stroke="#9cff57" strokeWidth="2" strokeLinecap="round"/>
      </>}
      {type === 'lock' && <>
        <rect x="71" y="73" width="90" height="77" rx="13" fill="#73ff6d" opacity=".26" filter={`url(#fg-${type})`}/>
        <path d="M85 80V58c0-42 61-42 61 0v22" stroke="#9dff7d" strokeWidth="16" strokeLinecap="round"/>
        <path d="M85 80V58c0-42 61-42 61 0v22" stroke="#17463b" strokeWidth="9" strokeLinecap="round"/>
        <rect x="72" y="75" width="88" height="74" rx="11" fill="url(#metal)" stroke="#baff87" strokeWidth="3"/>
        <circle cx="116" cy="109" r="9" fill="#c7ff6f"/>
        <path d="M116 113v15" stroke="#c7ff6f" strokeWidth="7" strokeLinecap="round"/>
      </>}
      {type === 'shield' && <>
        <path d="M115 21 166 43v42c0 34-24 58-51 70-29-12-52-36-52-70V43l52-22Z" fill="#9cff6b" opacity=".29" filter={`url(#fg-${type})`}/>
        <path d="M115 21 166 43v42c0 34-24 58-51 70-29-12-52-36-52-70V43l52-22Z" fill="url(#metal)" stroke="#a4ff83" strokeWidth="4"/>
        <path d="M116 37 152 53v32c0 24-14 42-36 54-23-11-38-30-38-54V53l38-16Z" stroke="#caffb0" strokeOpacity=".65" strokeWidth="2" fill="none"/>
        <path d="m93 88 16 16 31-32" stroke="#caff84" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </>}
      {type === 'rates' && <>
        <g fill="url(#metal)" stroke="#bbff8c" strokeWidth="2.4">
          <ellipse cx="78" cy="125" rx="30" ry="10"/><path d="M48 109v16c0 13 60 13 60 0v-16"/><ellipse cx="78" cy="110" rx="30" ry="10"/>
          <path d="M48 92v17c0 13 60 13 60 0V92"/><ellipse cx="78" cy="92" rx="30" ry="10"/>
          <ellipse cx="143" cy="136" rx="32" ry="10"/><path d="M111 119v17c0 13 64 13 64 0v-17"/><ellipse cx="143" cy="119" rx="32" ry="10"/>
        </g>
        <path d="M123 76 167 30m-33-2h35v35" stroke="#a8ff55" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M123 76 167 30m-33-2h35v35" stroke="#e9ffb8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </>}
      <circle cx="52" cy="66" r="2.2" fill="#a6ff78"/><circle cx="180" cy="89" r="2.4" fill="#b5ff83"/>
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Logo />
      <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Основная навигация">
        {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <CTA className="mobile-nav-cta" />
      </nav>
      <CTA className="header-cta" />
      <button className="menu-toggle" type="button" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} onClick={() => setOpen(o => !o)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Стилизованный земной шар и символы криптовалют" role="img">
    <div className="hero-visual__halo"/>
    <img className="hero-visual__globe" src={`${ASSET}globe-hero.svg`} alt="" />
    <div className="coin coin--bitcoin"><img src={`${ASSET}coin-btc.svg`} alt="" /></div>
    <div className="coin coin--ethereum"><span className="eth-diamond"><i/><b/></span></div>
    <div className="coin coin--tether">₮</div>
    <div className="coin coin--solana"><span>≋</span></div>
    <span className="hero-tiny-star hero-tiny-star--a"/>
    <span className="hero-tiny-star hero-tiny-star--b"/>
    <span className="hero-tiny-star hero-tiny-star--c"/>
  </div>
}

function Hero() {
  return <section id="top" className="hero">
    <div className="hero__back-grid"/>
    <div className="container hero__content">
      <div className="hero__copy reveal">
        <div className="eyebrow hero__eyebrow"><span className="pulse-dot"/> БЫСТРО <span>·</span> ВЫГОДНО <span>·</span> БЕЗОПАСНО <span>·</span> ПО ВСЕМУ МИРУ</div>
        <h1>Обмен криптовалют <span>по всему миру</span></h1>
        <p className="hero__description">Ваш надёжный партнёр в мире цифровых активов. Выгодные направления обмена, индивидуальные условия и поддержка менеджера в любое время.</p>
        <div className="hero__actions"><CTA /><a className="subtle-link" href="#advantages">Наши преимущества <ArrowDownRight size={18}/></a></div>
        <div className="hero__trust">
          <span><Globe2/> Международный формат</span>
          <span><Zap/> Оперативно</span>
          <span><ShieldCheck/> Конфиденциально</span>
        </div>
      </div>
      <HeroVisual />
    </div>
    <div className="hero__bottom-line" />
  </section>
}

function About() {
  return <section id="about" className="section about">
    <div className="container about__grid">
      <div className="about__copy reveal">
        <div className="eyebrow">ОБМЕН С ДОВЕРИЕМ</div>
        <h2>Надёжный обменник <span>криптовалюты</span></h2>
        <p>EXCHANGE BURO PAY — современный сервис обмена криптовалют для клиентов из разных стран. Мы делаем акцент на скорости, понятных условиях и персональном подходе.</p>
        <p>Расскажите менеджеру о вашей задаче, чтобы узнать актуальный курс, способы расчёта и доступность обмена в вашем городе.</p>
        <a className="text-link" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">Обсудить обмен <ArrowUpRight size={18}/></a>
      </div>
      <div className="about__stats reveal">
        <div className="about-tile"><span className="about-tile__icon"><Clock3 size={30}/></span><div><strong>24/7</strong><span>менеджеры на связи</span></div><ArrowUpRight className="tile-arrow" size={20}/></div>
        <div className="about-tile"><span className="about-tile__icon"><Globe2 size={30}/></span><div><strong>Весь мир</strong><span>международные запросы</span></div><ArrowUpRight className="tile-arrow" size={20}/></div>
        <div className="about-tile"><span className="about-tile__icon"><TrendingUp size={30}/></span><div><strong>Актуальный курс</strong><span>перед подтверждением сделки</span></div><ArrowUpRight className="tile-arrow" size={20}/></div>
      </div>
    </div>
  </section>
}

function Advantages() {
  return <section id="advantages" className="section advantages">
    <div className="container">
      <div className="section-title section-title--center reveal"><div className="eyebrow">НАШИ ПРЕИМУЩЕСТВА</div><h2>Почему выбирают<br/> EXCHANGE <span>BURO PAY</span></h2><p>Внимание к деталям, технологии и понятный процесс обмена.</p></div>
      <div className="benefit-grid">
        {benefits.map(item => <article className="benefit-card reveal" key={item.number}>
          <div className="benefit-card__top"><span>{item.number} / 04</span><ArrowUpRight size={17}/></div>
          <FeatureArt type={item.illustration} />
          <h3>{item.title}</h3><p>{item.description}</p>
        </article>)}
      </div>
      <div className="inline-cta reveal"><div><span className="eyebrow">ВАШ СЛЕДУЮЩИЙ ШАГ</span><h3>Готовы к обмену?</h3><p>Получите консультацию менеджера и согласуйте удобные условия.</p></div><CTA /></div>
    </div>
  </section>
}

function FAQ() {
  const [active, setActive] = useState(null)
  return <section className="section faq" id="faq">
    <div className="container">
      <div className="faq__head reveal"><div><div className="eyebrow">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</div><h2>FAQ<span className="heading-dot">.</span></h2></div><p>Не нашли ответ? Напишите менеджеру — подскажем, какие варианты доступны для вашей задачи.</p></div>
      <div className="faq__grid">
        {faqs.map((faq,i)=><div className={`faq-item ${active===i?'faq-item--open':''}`} key={faq.question}>
          <button type="button" onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i} aria-controls={`faq-answer-${i}`}>
            <span>{faq.question}</span><span className="faq-icon">{active===i?<X size={18}/>:<span>+</span>}</span>
          </button>
          <div className="faq-item__answer" id={`faq-answer-${i}`} hidden={active!==i}>{faq.answer}</div>
        </div>)}
      </div>
    </div>
  </section>
}

function World() {
  return <section id="world" className="section world">
    <div className="container world__layout">
      <div className="world__intro reveal"><div className="eyebrow">ГЛОБАЛЬНОЕ ПРИСУТСТВИЕ</div><h2>Работаем <span>по всему миру</span></h2><p>Принимаем запросы от клиентов из разных стран. География и доступные способы обмена зависят от конкретной локации.</p>
        <div className="world__note"><span className="world__note-icon"><Globe2 size={28}/></span><div><strong>Ваш город — ваш формат</strong><span>Наличие офиса в вашем городе и возможность проведения обмена уточняйте у менеджера.</span></div></div>
        <CTA className="world__cta">Уточнить доступность</CTA>
      </div>
      <div className="world__visual" role="img" aria-label="Карта мира с декоративными соединениями между крупными городами"><img src={`${ASSET}world-network.svg`} alt=""/><div className="map-shine" /></div>
    </div>
  </section>
}

function SupportArt() {
  return <div className="support-art" aria-hidden="true">
    <div className="support-art__aura"/>
    <div className="support-art__ring support-art__ring--one"/>
    <div className="support-art__ring support-art__ring--two"/>
    <div className="support-art__disc"><span>24<span className="disc-slash">/</span>7</span></div>
    <span className="support-orb support-orb--a"><Coins size={25}/></span>
    <span className="support-orb support-orb--b"><ShieldCheck size={24}/></span>
    <span className="support-orb support-orb--c"><MessageCircle size={24}/></span>
  </div>
}

function Support() {
  return <section className="section support"><div className="container support__layout"><SupportArt /><div className="support__copy reveal"><div className="eyebrow">МЫ ВСЕГДА НА СВЯЗИ</div><h2>Работаем <span>24 на 7</span></h2><p>Наши менеджеры готовы помочь в любое время, в любой день. Получите консультацию по направлениям обмена, условиям и доступности услуг.</p><div className="support__features"><span><Headphones/> Онлайн-поддержка</span><span><Zap/> Быстрые ответы</span><span><Clock3/> Круглосуточно</span><span><Globe2/> По всему миру</span></div><CTA className="support__cta">Написать менеджеру</CTA></div></div></section>
}

function Footer() {
  return <footer className="footer" id="contacts"><div className="container">
    <div className="footer__cta reveal"><div><div className="eyebrow">СВЯЗЬ С МЕНЕДЖЕРОМ</div><h2>Начните обмен прямо сейчас</h2><p>Свяжитесь с нами, чтобы узнать индивидуальные условия для вашей операции.</p></div><CTA /></div>
    <div className="footer__bottom"><Logo small/><div className="footer__meta"><span>© {new Date().getFullYear()} EXCHANGE BURO PAY</span><span>Информация на сайте носит ознакомительный характер. Условия и доступность уточняйте у менеджера.</span></div><a href="#top" className="back-top">Наверх <ArrowUpRight size={17}/></a></div>
  </div></footer>
}

export default function App() {
  useEffect(() => {
    const revealers = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { revealers.forEach(el => el.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible');observer.unobserve(entry.target) } })
    }, {rootMargin:'0px 0px -30px 0px',threshold:.07})
    revealers.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  },[])
  return <div className="app"><div className="ambient-light ambient-light--one"/><div className="ambient-light ambient-light--two"/><Header/><main><Hero/><About/><Advantages/><FAQ/><World/><Support/></main><Footer/></div>
}
