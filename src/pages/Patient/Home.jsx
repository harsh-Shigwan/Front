import React from 'react'
import chart from '../../Data/chart.png'
import pie from '../../Data/pie.png'
const Home = () => {
  return (
    <div><div className="w-[1100px] relative bg-whitesmoke h-[870px] flex flex-col items-start justify-start p-[30px] box-border gap-[30px] text-left text-sm text-black font-text-small">
    <div className="w-[1100px] overflow-hidden flex flex-row items-start justify-start gap-[30px] text-center text-lg">
      <div className="flex-1 rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-center justify-center p-6">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[46px] relative rounded-lg bg-theme-tertiary-soft h-[46px] hidden">
            <b className="absolute top-[12px] left-[16px] hidden">A</b>
           
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="w-[46px] relative rounded-lg bg-theme-tertiary-soft h-[46px]">
              <b className="absolute top-[12px] left-[16px] hidden">A</b>
              
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-left text-sm text-text-body-muted">
              <div className="self-stretch relative font-medium">
                Patients on-board
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xl text-theme-dark-default">
                <div className="relative leading-[136.52%] font-semibold">
                  2.300
                </div>
                <b className="w-[236px] relative text-xs hidden text-theme-success-default">
                  (+12%)
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-center justify-center p-6">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[46px] relative rounded-lg bg-theme-primary-soft h-[46px] hidden">
            <b className="absolute top-[12px] left-[16px] hidden">A</b>
           
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="w-[46px] relative rounded-lg bg-theme-primary-soft h-[46px]">
              <b className="absolute top-[12px] left-[16px] hidden">A</b>
             
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-left text-sm text-text-body-muted">
              <div className="self-stretch relative font-medium">
                Doctors on-board
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xl text-theme-dark-default">
                <div className="relative leading-[136.52%] font-semibold">
                  200
                </div>
                <b className="w-[236px] relative text-xs hidden text-theme-success-default">
                  (+5%)
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-theme-white-default  shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-center justify-center p-6">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[46px] relative rounded-lg bg-theme-warning-soft h-[46px] hidden">
            <b className="absolute top-[12px] left-[16px] hidden">A</b>
            
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="w-[46px] relative rounded-lg bg-theme-warning-soft h-[46px]">
              <b className="absolute top-[12px] left-[16px] hidden">A</b>
             
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-left text-sm text-text-body-muted">
              <div className="self-stretch relative font-medium">
                Hospitals on-board
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xl text-theme-dark-default">
                <div className="relative leading-[136.52%] font-semibold">
                  23
                </div>
                <b className="w-[236px] relative text-xs hidden text-theme-success-default">
                  (+8%)
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-center justify-center p-6">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[46px] relative rounded-lg bg-theme-success-soft h-[46px] hidden">
            <b className="absolute top-[12px] left-[16px] hidden">A</b>
            <img
              className="absolute right-[14px] bottom-[14px] w-[18px] h-[18px]"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="w-[46px] relative rounded-lg bg-theme-success-soft h-[46px]">
              <b className="absolute top-[12px] left-[16px] hidden">A</b>
              
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-left text-sm text-text-body-muted">
              <div className="self-stretch relative font-medium">
                Medicine Stocks
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xl text-theme-dark-default">
                <div className="relative leading-[136.52%] font-semibold">
                  557+
                </div>
                <b className="w-[236px] relative text-xs hidden text-theme-success-default">
                  (+100%)
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch relative h-[402px] text-table-body-strong">
      <div className="absolute top-[255.73px] left-[858.54px] w-[251.46px] h-[146.27px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)]">
            <div className="absolute h-[calc(100%_-_0.27px)] w-[calc(100%_-_0.46px)] top-[0px] right-[0.46px] bottom-[0.27px] left-[0px] rounded-2xl bg-theme-white-default" />
          </div>
        </div>
        <div className="absolute bottom-[19.27px] left-[19.28px] leading-[23px] hidden">
          Follow your statistics.
        </div>
        <div className="absolute w-[calc(100%_-_35.46px)] top-[20px] right-[16.46px] left-[19px] h-[46px] hidden text-smi text-input-muted-placeholder">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-200 [backdrop-filter:blur(10px)]" />
          </div>
          <div className="absolute top-[calc(50%_-_6px)] left-[16px] leading-[13px] font-medium inline-block w-[81px] h-[11px]">
            E-mail
          </div>
          <div className="absolute h-[calc(100%_-_10px)] top-[5px] right-[4px] bottom-[5px] flex flex-col items-start justify-start text-xs text-theme-white-default">
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-md bg-theme-primary-default flex flex-col items-center justify-start py-3 px-5">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-3 relative h-3 hidden"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[12px] font-semibold">
                    Subscribe
                  </div>
                  <img
                    className="w-2.5 relative h-2.5 hidden"
                    alt=""
                    src="/chevronright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] rounded-2xl  bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] w-[821.38px] h-[402px] flex flex-col items-start justify-start p-6 box-border gap-[30px] text-lg text-theme-dark-default">
       
      <img src={chart}></img>
      </div>
















      <div className="absolute top-[0px] left-[851.51px] w-[253.04px] h-[402px] flex flex-col items-start justify-start gap-[30px] text-smi text-input-muted-placeholder">
        <div className="self-stretch rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-start justify-start p-6 gap-[24px]">
          <div className="w-[162px] relative h-12">
            <div className="absolute h-[95.83%] w-[101.85%] top-[2.08%] right-[-2.17%] bottom-[2.08%] left-[0.31%] rounded-2xl hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-200 [backdrop-filter:blur(10px)]" />
            </div>
            <div className="absolute top-[calc(50%_-_6px)] left-[16.51px] leading-[13px] font-medium hidden w-[81px] h-[11px]">
              E-mail
            </div>
            <div className="absolute h-full top-[0px] right-[0.51px] bottom-[0px] w-[161px] flex flex-col items-start justify-start text-sm text-theme-white-default">
              <div className="w-[218px] flex flex-col items-start justify-start">
                <div className="w-[207px] rounded-md bg-theme-primary-dark flex flex-col items-center justify-start py-4 px-6 box-border">
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    
                    <div className="relative leading-[14px] font-semibold">
                      Notifications
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[217px] relative text-sm leading-[23px] text-table-body-strong inline-block">
            Check updates, notifications etc
          </div>
        </div>
        <div className="self-stretch rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-start justify-start p-6 gap-[24px] text-base text-theme-dark-default">
          <div className="relative leading-[25px] font-semibold whitespace-pre-wrap">
            OPD Insights
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xs text-text-heading-dark">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="w-2 relative rounded-[50%] bg-theme-primary-default h-2" />
                  <div className="relative leading-[16px] font-semibold">
                    8
                  </div>
                </div>
                <div className="self-stretch relative text-3xs text-text-body-muted">
                  Beds available
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="w-2 relative rounded-[50%] bg-theme-tertiary-default h-2" />
                  <div className="relative leading-[16px] font-semibold">
                    5
                  </div>
                </div>
                <div className="self-stretch relative text-3xs text-text-body-muted">
                  Wards available
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="w-2 relative rounded-[50%] bg-theme-secondary-dark h-2" />
                  <div className="relative leading-[16px] font-semibold">
                    2
                  </div>
                </div>
                <div className="self-stretch relative text-3xs text-text-body-muted">
                  Beds not in use
                </div>
              </div>
            </div>
            <div className="w-[117px] relative h-[115px] text-center text-xl">
              <img
                className="absolute top-[calc(50%_-_57.5px)] right-[0px] w-[117px] h-[115px]"
                alt=""
                src={pie}
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch relative h-[22px] text-right text-theme-primary-default">
      <div className="absolute top-[0px] left-[0px] w-[1110px] h-[22px]">
        <div className="absolute w-[6.31%] top-[31.82%] left-[93.05%] font-medium inline-block">
          Show all
        </div>
        <div className="absolute w-[9.91%] top-[0%] left-[0%] text-lg font-semibold text-text-heading-dark text-left inline-block">
          Visits
        </div>
      </div>
    </div>
    <div className="w-[1110px] flex flex-row items-start justify-start gap-[30px] text-xs text-text-body-muted">
      <div className="w-[255px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[255px] h-[202px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] w-[255px] h-[202px]" />
          <div className="absolute top-[26px] left-[71px] leading-[100%] font-semibold inline-block w-[89.44px] h-[12.1px]">
            24 April ‘24
          </div>
          <div className="absolute top-[126px] left-[17.2px] leading-[125%] font-semibold text-theme-primary-default inline-block w-[165.11px] h-[31px]">
            Dr. Shimron Hetmyer
          </div>
          <div className="absolute top-[86px] left-[17.49px] text-sm leading-[140%] font-medium text-black inline-block w-[220.03px] h-[45.18px]">
            Complete Blood Count (CBC)
          </div>
          <img
            className="absolute top-[20.51px] left-[29.14px] w-[34.97px] h-[24.61px] overflow-hidden"
            alt=""
            src="/bloodtype-black-24dp-1.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[12.94%] bottom-[84.65%] left-[85.49%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[9.8%] bottom-[84.65%] left-[88.63%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[6.67%] bottom-[84.65%] left-[91.76%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy-2.svg"
          />
        </div>
        <div className="absolute top-[12px] left-[17px] rounded-[50%] bg-slateblue w-10 h-10" />
        <img
          className="absolute h-[9.9%] w-[7.06%] top-[10.89%] right-[81.96%] bottom-[79.21%] left-[10.98%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="w-[255px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[255px] h-[202px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] w-[255px] h-[202px]" />
          <div className="absolute top-[24px] left-[74px] leading-[100%] font-semibold inline-block w-[89.44px] h-[12.1px]">
            31 April ‘24
          </div>
          <div className="absolute top-[125px] left-[17.2px] leading-[125%] font-semibold text-theme-primary-default inline-block w-[165.11px] h-[31px]">
            Dr. Shilpa Rao
          </div>
          <div className="absolute top-[86px] left-[17px] text-sm leading-[140%] font-medium text-black inline-block w-[221px] h-[26px]">
            Clinic Visit Appointment
          </div>
          <img
            className="absolute top-[20.51px] left-[29.14px] w-[34.97px] h-[24.61px] overflow-hidden"
            alt=""
            src="/bloodtype-black-24dp-1.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[12.94%] bottom-[84.65%] left-[85.49%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[9.8%] bottom-[84.65%] left-[88.63%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[6.67%] bottom-[84.65%] left-[91.76%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy-2.svg"
          />
        </div>
        <div className="absolute top-[10px] left-[17px] rounded-[50%] bg-orangered w-10 h-10" />
        <img
          className="absolute h-[9.9%] w-[7.06%] top-[9.9%] right-[81.96%] bottom-[80.2%] left-[10.98%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="w-[255px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[255px] h-[202px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] w-[255px] h-[202px]" />
          <div className="absolute top-[22px] left-[73px] leading-[100%] font-semibold inline-block w-[89.44px] h-[12.1px]">
            2 June ‘24
          </div>
          <div className="absolute top-[125px] left-[17.2px] leading-[125%] font-semibold text-theme-primary-default inline-block w-[165.11px] h-[31px]">
            Dr. Kartik Shukla
          </div>
          <div className="absolute top-[87px] left-[17px] text-sm leading-[140%] font-medium text-black inline-block w-[221px] h-[25px]">
            Video Consultation Chat
          </div>
          <img
            className="absolute top-[20.51px] left-[29.14px] w-[34.97px] h-[24.61px] overflow-hidden"
            alt=""
            src="/bloodtype-black-24dp-1.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[12.94%] bottom-[84.65%] left-[85.49%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[9.8%] bottom-[84.65%] left-[88.63%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[6.67%] bottom-[84.65%] left-[91.76%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy-2.svg"
          />
        </div>
        <div className="absolute top-[8px] left-[17px] rounded-[50%] bg-slateblue w-10 h-10" />
        <img
          className="absolute h-[6.93%] w-[7.84%] top-[10.4%] right-[81.57%] bottom-[82.67%] left-[10.59%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="w-[255px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[255px] h-[202px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] w-[255px] h-[202px]" />
          <div className="absolute top-[22px] left-[74px] leading-[100%] font-semibold inline-block w-[89.44px] h-[12.1px]">
            24 April ‘24
          </div>
          <div className="absolute top-[125px] left-[17.2px] leading-[125%] font-semibold text-theme-primary-default inline-block w-[165.11px] h-[31px]">
            Dr. Shirya Dutta
          </div>
          <div className="absolute top-[86px] left-[17px] text-sm leading-[140%] font-medium text-black inline-block w-[221px] h-[29px]">{`Magnetic Resonance Imaging `}</div>
          <img
            className="absolute top-[20.51px] left-[29.14px] w-[34.97px] h-[24.61px] overflow-hidden"
            alt=""
            src="/bloodtype-black-24dp-1.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[12.94%] bottom-[84.65%] left-[85.49%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[9.8%] bottom-[84.65%] left-[88.63%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy.svg"
          />
          <img
            className="absolute h-[1.98%] w-[1.57%] top-[13.37%] right-[6.67%] bottom-[84.65%] left-[91.76%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/oval-67-copy-2.svg"
          />
        </div>
        <div className="absolute top-[8px] left-[17px] rounded-[50%] bg-orangered w-10 h-10" />
        <img
          className="absolute h-[9.9%] w-[7.06%] top-[8.91%] right-[81.96%] bottom-[81.19%] left-[10.98%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
    </div>
  </div></div>
  )
}

export default Home