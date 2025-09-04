import React from 'react';
import { 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  Shield, 
  Bell,
  Database,
  CreditCard 
} from 'lucide-react';

const iconMap = {
  Settings,
  Users,
  FileText,
  BarChart3,
  Shield,
  Bell,
  Database,
  CreditCard
};

const AdminBox = ({ title, description, icon, color, bgColor, onClick }) => {
  const IconComponent = iconMap[icon];

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 
                 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        <div className={`${bgColor} p-3 rounded-lg flex-shrink-0`}>
          {IconComponent && <IconComponent className={`w-6 h-6 ${color}`} />}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminBox;