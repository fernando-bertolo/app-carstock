import { Car, BarChart3, Shield, Zap, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function HomePage() {
    redirect('/dashboard');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Header */}
        <header className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-600 rounded-xl">
                <Car className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">CarStock</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Recursos</a>
                <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefícios</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Depoimentos</a>
                <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Acessar Sistema
                </Link>
            </div>
            </nav>
        </header>

        {/* Hero Section */}
        <section className="relative px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Gerencie seu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> estoque </span>
                de veículos
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Sistema completo para concessionárias e revendedoras. Controle total do seu inventário, 
                vendas e relatórios em uma plataforma moderna e intuitiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/dashboard" className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                    <span>Começar Agora</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                    Ver Demonstração
                </button>
                </div>
            </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-20 left-10 hidden lg:block">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 animate-pulse">
                <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Vendas Hoje</p>
                    <p className="text-lg font-bold text-gray-900">+23%</p>
                </div>
                </div>
            </div>
            </div>

            <div className="absolute top-32 right-10 hidden lg:block">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 animate-pulse delay-300">
                <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                    <Car className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Estoque</p>
                    <p className="text-lg font-bold text-gray-900">247 veículos</p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Recursos Principais</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tudo que você precisa para gerenciar seu negócio de forma eficiente
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Relatórios Avançados</h3>
                <p className="text-gray-600 leading-relaxed">
                    Dashboards intuitivos com métricas em tempo real. Acompanhe vendas, 
                    estoque e performance do seu negócio.
                </p>
                </div>

                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-purple-100 rounded-xl w-fit mb-6 group-hover:bg-purple-200 transition-colors">
                    <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança Total</h3>
                <p className="text-gray-600 leading-relaxed">
                    Seus dados protegidos com criptografia de ponta. Backups automáticos 
                    e controle de acesso por usuário.
                </p>
                </div>

                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-green-100 rounded-xl w-fit mb-6 group-hover:bg-green-200 transition-colors">
                    <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Rápida</h3>
                <p className="text-gray-600 leading-relaxed">
                    Sistema otimizado para alta performance. Acesse informações 
                    instantaneamente, mesmo com milhares de veículos.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto">
            <div className="text-center text-white mb-16">
                <h2 className="text-4xl font-bold mb-4">Por que escolher o CarStock?</h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Mais de 1000 empresas já confiam em nossa plataforma
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime garantido</div>
                </div>
                <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Suporte técnico</div>
                </div>
                <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Empresas ativas</div>
                </div>
                <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">50k+</div>
                <div className="text-blue-100">Veículos gerenciados</div>
                </div>
            </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    "O CarStock revolucionou nossa gestão. Conseguimos reduzir o tempo de 
                    controle de estoque em 70% e aumentar nossas vendas significativamente."
                </p>
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                    <div className="font-semibold text-gray-900">Carlos Silva</div>
                    <div className="text-gray-500">Diretor - AutoMax</div>
                    </div>
                </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    "Interface intuitiva e relatórios detalhados. Nossa equipe se adaptou 
                    rapidamente e os resultados apareceram no primeiro mês."
                </p>
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                    <div className="font-semibold text-gray-900">Ana Costa</div>
                    <div className="text-gray-500">Gerente - VelocityAutos</div>
                    </div>
                </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    "Suporte excepcional e sistema muito confiável. Recomendo para 
                    qualquer concessionária que queira modernizar sua gestão."
                </p>
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                    <div className="font-semibold text-gray-900">Roberto Lima</div>
                    <div className="text-gray-500">CEO - PrimeCars</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
                Junte-se a milhares de empresas que já otimizaram sua gestão com o CarStock
            </p>
            <Link href="/dashboard" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2">
                <span>Começar Gratuitamente</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            </div>
        </section>
        </div>
    );
}