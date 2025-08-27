import React, { useState } from 'react';
import { ArrowLeft, Upload, Palette, Type, Save, Eye } from 'lucide-react';

// Mock context for demonstration
const useApp = () => ({
  companySettings: {
    name: 'Acme Corporation',
    logo: '',
    primaryColor: '#3B82F6',
    secondaryColor: '#64748B',
    fontFamily: 'Inter',
    fontSize: '16px'
  },
  updateCompanySettings: (settings) => {
    console.log('Settings updated:', settings);
  }
});

const CompanySettings = ({ onBack = () => console.log('Back clicked') }) => {
  const { companySettings, updateCompanySettings } = useApp();
  const [settings, setSettings] = useState(companySettings);

  const handleSave = () => {
    updateCompanySettings(settings);
    alert('Company settings saved successfully!');
  };

  const handleInputChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const colorPresets = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', 
    '#8B5CF6', '#06B6D4', '#EC4899', '#64748B'
  ];

  const fontOptions = [
    'Inter', 'Roboto', 'Open Sans', 'Poppins', 
    'Montserrat', 'Lato', 'Source Sans Pro', 'Nunito'
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      padding: '32px',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    },
    maxWidth: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px',
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid #f3f4f6'
    },
    backButton: {
      padding: '12px',
      background: 'transparent',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    backButtonHover: {
      background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
      borderColor: '#93c5fd',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    headerContent: {
      flex: 1
    },
    mainTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '18px'
    },
    liveIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      padding: '8px 16px',
      borderRadius: '24px',
      border: '1px solid #bbf7d0'
    },
    pulse: {
      width: '8px',
      height: '8px',
      background: '#10b981',
      borderRadius: '50%',
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px'
    },
    gridContainerXL: {
      '@media (min-width: 1280px)': {
        gridTemplateColumns: '2fr 1fr'
      }
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    card: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid #f3f4f6',
      transition: 'all 0.3s ease'
    },
    cardHover: {
      boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.35)'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px'
    },
    iconContainer: {
      width: '40px',
      height: '40px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827'
    },
    fieldGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '12px',
      transition: 'color 0.2s ease'
    },
    input: {
      width: '100%',
      padding: '16px 24px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '500',
      background: '#f9fafb',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
      background: 'white'
    },
    inputRow: {
      display: 'flex',
      gap: '12px'
    },
    uploadButton: {
      padding: '16px 24px',
      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      color: '#374151',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    uploadButtonHover: {
      background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
      color: '#1d4ed8',
      borderColor: '#93c5fd',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    logoPreview: {
      marginTop: '16px',
      padding: '24px',
      background: 'linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)',
      borderRadius: '12px',
      border: '2px dashed #d1d5db'
    },
    logoPreviewContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    logoImage: {
      width: '64px',
      height: '64px',
      objectFit: 'contain',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    },
    previewLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#059669',
      fontSize: '14px',
      fontWeight: '500'
    },
    colorInputRow: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    },
    colorPicker: {
      width: '64px',
      height: '64px',
      border: '4px solid #e5e7eb',
      borderRadius: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    colorPickerHover: {
      borderColor: '#a855f7',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transform: 'scale(1.05)'
    },
    colorPresets: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '24px'
    },
    colorPreset: {
      width: '48px',
      height: '48px',
      borderRadius: '16px',
      border: '4px solid #e5e7eb',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    colorPresetHover: {
      borderColor: 'white',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transform: 'scale(1.1)'
    },
    select: {
      width: '100%',
      padding: '16px 24px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '18px',
      background: '#f9fafb',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    selectFocus: {
      borderColor: '#10b981',
      boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)',
      background: 'white'
    },
    sidebar: {
      position: 'sticky',
      top: '32px'
    },
    previewCard: {
      padding: '24px',
      borderRadius: '16px',
      border: '4px solid',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    previewCardHover: {
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    previewHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    previewIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    previewTitle: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    colorSwatches: {
      marginTop: '24px'
    },
    swatchesTitle: {
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '16px'
    },
    swatchContainer: {
      display: 'flex',
      gap: '12px'
    },
    swatch: {
      textAlign: 'center'
    },
    swatchColor: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '2px solid #e5e7eb'
    },
    swatchLabel: {
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '8px'
    },
    typographySample: {
      marginTop: '24px'
    },
    sampleContainer: {
      padding: '16px',
      background: '#f9fafb',
      borderRadius: '12px'
    },
    sampleHeading: {
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    sampleText: {
      fontSize: '14px'
    },
    saveButton: {
      marginTop: '48px',
      display: 'flex',
      justifyContent: 'center'
    },
    saveButtonElement: {
      padding: '16px 48px',
      background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    saveButtonHover: {
      background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)',
      boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
      transform: 'scale(1.05)'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: .5;
            }
          }
          
          .color-preset:hover {
            transform: scale(1.1);
            border-color: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          
          .save-button:hover .save-icon {
            transform: rotate(12deg);
          }
          
          .back-button:hover {
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
            border-color: #93c5fd;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          
          .upload-button:hover {
            background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
            color: #1d4ed8;
            border-color: #93c5fd;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .color-picker:hover {
            border-color: #a855f7;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transform: scale(1.05);
          }
          
          .card:hover {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35);
          }
          
          .save-button:hover {
            background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35);
            transform: scale(1.05);
          }
          
          input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
            background: white;
          }
          
          select:focus {
            border-color: #10b981;
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
            background: white;
          }
        `}
      </style>
      
      <div style={styles.maxWidth}>
        {/* Header */}
        <div style={styles.header}>
          <button
            onClick={onBack}
            className="back-button"
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="#6b7280" />
          </button>
          <div style={styles.headerContent}>
            <h1 style={styles.mainTitle}>
              Company Settings
            </h1>
            <p style={styles.subtitle}>
              Customize your company's appearance and branding
            </p>
          </div>
          <div style={styles.liveIndicator}>
            <div style={styles.pulse}></div>
            <span style={{ color: '#059669', fontWeight: '500', fontSize: '14px' }}>Live Preview</span>
          </div>
        </div>

        <div style={{ 
          ...styles.gridContainer,
          '@media (min-width: 1280px)': { gridTemplateColumns: '2fr 1fr' }
        }}>
          {/* Main Settings Area */}
          <div style={styles.mainContent}>
            
            {/* Basic Information */}
            <div className="card" style={styles.card}>
              <div style={styles.sectionHeader}>
                <div style={{ 
                  ...styles.iconContainer, 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)' 
                }}>
                  <Type size={20} />
                </div>
                <h2 style={styles.sectionTitle}>Basic Information</h2>
              </div>
              
              <div>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={settings.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    style={styles.input}
                    placeholder="Enter your company name"
                  />
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>
                    Company Logo URL
                  </label>
                  <div style={styles.inputRow}>
                    <input
                      type="text"
                      value={settings.logo}
                      onChange={(e) => handleInputChange('logo', e.target.value)}
                      style={{ ...styles.input, flex: 1 }}
                      placeholder="Enter logo URL or upload"
                    />
                    <button className="upload-button" style={styles.uploadButton}>
                      <Upload size={20} />
                    </button>
                  </div>
                  {settings.logo && (
                    <div style={styles.logoPreview}>
                      <div style={styles.logoPreviewContent}>
                        <img 
                          src={settings.logo} 
                          alt="Logo Preview" 
                          style={styles.logoImage}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div style={styles.previewLabel}>
                          <Eye size={16} />
                          <span>Logo Preview</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Color Scheme */}
            <div className="card" style={styles.card}>
              <div style={styles.sectionHeader}>
                <div style={{ 
                  ...styles.iconContainer, 
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' 
                }}>
                  <Palette size={20} />
                </div>
                <h2 style={styles.sectionTitle}>Color Scheme</h2>
              </div>
              
              <div>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>
                    Primary Color
                  </label>
                  <div style={styles.colorInputRow}>
                    <input
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      className="color-picker"
                      style={styles.colorPicker}
                    />
                    <input
                      type="text"
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      style={{ ...styles.input, fontFamily: 'monospace', flex: 1 }}
                    />
                  </div>
                  <div style={styles.colorPresets}>
                    {colorPresets.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleInputChange('primaryColor', color)}
                        className="color-preset"
                        style={{
                          ...styles.colorPreset,
                          backgroundColor: color
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>
                    Secondary Color
                  </label>
                  <div style={styles.colorInputRow}>
                    <input
                      type="color"
                      value={settings.secondaryColor}
                      onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                      className="color-picker"
                      style={styles.colorPicker}
                    />
                    <input
                      type="text"
                      value={settings.secondaryColor}
                      onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                      style={{ ...styles.input, fontFamily: 'monospace', flex: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="card" style={styles.card}>
              <div style={styles.sectionHeader}>
                <div style={{ 
                  ...styles.iconContainer, 
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                }}>
                  <Type size={20} />
                </div>
                <h2 style={styles.sectionTitle}>Typography</h2>
              </div>
              
              <div>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>
                    Font Family
                  </label>
                  <select
                    value={settings.fontFamily}
                    onChange={(e) => handleInputChange('fontFamily', e.target.value)}
                    style={styles.select}
                  >
                    {fontOptions.map((font) => (
                      <option key={font} value={font} style={{ fontFamily: font }}>
                        {font}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.label}>
                    Base Font Size
                  </label>
                  <select
                    value={settings.fontSize}
                    onChange={(e) => handleInputChange('fontSize', e.target.value)}
                    style={styles.select}
                  >
                    <option value="14px">Small (14px)</option>
                    <option value="16px">Medium (16px)</option>
                    <option value="18px">Large (18px)</option>
                    <option value="20px">Extra Large (20px)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Sidebar */}
          <div style={styles.sidebar}>
            <div className="card" style={styles.card}>
              <div style={styles.sectionHeader}>
                <div style={{ 
                  ...styles.iconContainer, 
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' 
                }}>
                  <Eye size={20} />
                </div>
                <h2 style={styles.sectionTitle}>Live Preview</h2>
              </div>
              
              <div>
                {/* Preview Card */}
                <div 
                  style={{
                    ...styles.previewCard,
                    borderColor: settings.primaryColor,
                    fontFamily: settings.fontFamily,
                    fontSize: settings.fontSize
                  }}
                >
                  <div style={styles.previewHeader}>
                    <div 
                      style={{
                        ...styles.previewIcon,
                        backgroundColor: settings.primaryColor + '20'
                      }}
                    >
                      <span 
                        style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: settings.primaryColor
                        }}
                      >
                        ★
                      </span>
                    </div>
                    <div>
                      <h3 
                        style={{
                          ...styles.previewTitle,
                          color: settings.primaryColor
                        }}
                      >
                        {settings.name || 'Your Company'}
                      </h3>
                    </div>
                  </div>
                  <p 
                    style={{
                      lineHeight: '1.6',
                      color: settings.secondaryColor
                    }}
                  >
                    This is how your company branding will appear with the current settings. 
                    The preview updates in real-time as you make changes.
                  </p>
                </div>

                {/* Color Swatches */}
                <div style={styles.colorSwatches}>
                  <h3 style={styles.swatchesTitle}>Color Palette</h3>
                  <div style={styles.swatchContainer}>
                    <div style={styles.swatch}>
                      <div 
                        style={{
                          ...styles.swatchColor,
                          backgroundColor: settings.primaryColor
                        }}
                      />
                      <p style={styles.swatchLabel}>Primary</p>
                    </div>
                    <div style={styles.swatch}>
                      <div 
                        style={{
                          ...styles.swatchColor,
                          backgroundColor: settings.secondaryColor
                        }}
                      />
                      <p style={styles.swatchLabel}>Secondary</p>
                    </div>
                  </div>
                </div>

                {/* Typography Sample */}
                <div style={styles.typographySample}>
                  <h3 style={styles.swatchesTitle}>Typography</h3>
                  <div 
                    style={{
                      ...styles.sampleContainer,
                      fontFamily: settings.fontFamily,
                      fontSize: settings.fontSize
                    }}
                  >
                    <p style={styles.sampleHeading}>Sample Heading</p>
                    <p style={styles.sampleText}>Sample paragraph text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div style={styles.saveButton}>
          <button
            onClick={handleSave}
            className="save-button"
            style={styles.saveButtonElement}
          >
            <Save className="save-icon" size={24} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanySettings;