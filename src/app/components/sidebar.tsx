"use client";

import React from 'react';
import { 
  Home, 
  Car, 
  Users, 
  UserCheck, 
  ShoppingCart, 
  TrendingUp, 
  FileText, 
  Settings,
  ArrowUpDown,
  DollarSign,
  Database
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'vehicles', label: 'Veículos', icon: Car },
  { id: 'inventory', label: 'Estoque', icon: ArrowUpDown },
  { id: 'customers', label: 'Clientes', icon: Users },
  { id: 'employees', label: 'Funcionários', icon: UserCheck },
  { id: 'sales', label: 'Vendas', icon: ShoppingCart },
  { id: 'expenses', label: 'Despesas', icon: DollarSign },
  { id: 'management', label: 'Gerenciamento', icon: Database },
  { id: 'reports', label: 'Relatórios', icon: FileText },
  { id: 'analytics', label: 'Análises', icon: TrendingUp },
  { id: 'settings', label: 'Configurações', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href ? "bg-[var(--color-border)]" : "";
    };

    return (
        <div className="w-64 bg-gray-900 text-white h-full flex flex-col">
        <div className="p-6 border-b border-gray-800">
            <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-gray-900" />
            </div>
            <div>
                <h1 className="text-xl font-bold">AutoStock</h1>
                <p className="text-sm text-gray-400">Gestão de Veículos</p>
            </div>
            </div>
        </div>
        
        <nav className="flex-1 py-6">
            <ul className="space-y-1 px-3">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    
                    return (
                        <li key={item.id}>
                            <Link
                                href={`/${item.id}`}
                                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive(`/${item.id}`)
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                }`}

                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        
        <div className="p-6 border-t border-gray-800">
            <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">AD</span>
            </div>
            <div className="flex-1">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-gray-400">admin@autostock.com</p>
            </div>
            </div>
        </div>
        </div>
    );
}