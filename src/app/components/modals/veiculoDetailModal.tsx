"use client";

import React from 'react';
import { X, Car, Calendar, Palette, Fuel, Settings, Hash, MapPin } from 'lucide-react';

interface VehicleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: any;
}

export default function VehicleDetailModal({ isOpen, onClose, vehicle }: VehicleDetailModalProps) {
  if (!isOpen || !vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="backdrop-blur-xs backdrop-grayscale backdrop-brightness-80 fixed inset-0 flex items-center justify-center" onClick={onClose}></div>
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <p className="text-sm text-gray-500">{vehicle.version} • {vehicle.year}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Chassi</p>
                    <p className="text-sm text-gray-600">{vehicle.chassi}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Placa</p>
                    <p className="text-sm text-gray-600">{vehicle.plate || 'Não informado'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cor</p>
                    <p className="text-sm text-gray-600">{vehicle.color}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Ano</p>
                    <p className="text-sm text-gray-600">{vehicle.year}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Fuel className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Combustível</p>
                    <p className="text-sm text-gray-600">{vehicle.fuel || 'Flex'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Transmissão</p>
                    <p className="text-sm text-gray-600">{vehicle.transmission || 'Manual'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Portas</p>
                    <p className="text-sm text-gray-600">{vehicle.doors || 4} portas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-bold">KM</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Quilometragem</p>
                    <p className="text-sm text-gray-600">{vehicle.mileage || 0} km</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Preço</p>
                  <p className="text-2xl font-bold text-gray-900">{vehicle.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Status</p>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    vehicle.status === 'Disponível' ? 'bg-green-100 text-green-800' :
                    vehicle.status === 'Reservado' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {vehicle.status}
                  </span>
                </div>
              </div>
            </div>
            
            {vehicle.description && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-2">Descrição</p>
                <p className="text-sm text-gray-600">{vehicle.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}