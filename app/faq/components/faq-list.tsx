import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import { IoWarning } from "react-icons/io5";
import { getFaqCategories, getFaqsData } from "../actions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse from "html-react-parser";

const FaqList = async () => {
  const faqCategories = await getFaqCategories();
  const faqData = await getFaqsData();

  const getFilteredFaqs = (categoryId: number) => {
    if (categoryId === 4) {
      return faqData;
    }
    return faqData.filter(faq => faq.category_id === categoryId);
  };

  return (
    <section>
      <Tabs defaultValue="all">
        <TabsList className="h-[60px] border-b border-[#C2CFD6]/30 w-full bg-transparent">
          <div className="flex items-center justify-center gap-5 xl:gap-10 w-full">
            {faqCategories.reverse().map(catContent => (
              <TabsTrigger
                key={catContent.id}
                value={catContent.category.toLowerCase()}
                className="data-[state=active]:text-brand"
              >
                {catContent.category}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {faqCategories.map(category => (
          <TabsContent
            key={category.id}
            value={category.category.toLowerCase()}
            className="my-10 md:px-[1.5rem] px-[1.25rem] mx-auto max-w-[56rem]"
          >
            <Accordion type="multiple" className="w-full">
              {getFilteredFaqs(category.id).length > 0 ? (
                getFilteredFaqs(category.id).map((item, index) => (
                  <AccordionItem
                    key={crypto.randomUUID()}
                    value={`item-${index}`}
                    className="bg-[rgb(194,207,214)]/20 rounded-lg mb-6 px-4 py-2 border-none"
                  >
                    <AccordionTrigger className="text-start text-boldForeground">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <hr className="border-[rgba(194,207,214,var(--tw-border-opacity))] border-opacity-30 mb-6" />
                      {parse(item.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <div className="flex justify-center items-center py-10 px-5">
                  <span className="md:text-sm text-sm px-5 py-3 flex items-center leading-5 rounded-lg bg-gray-50 text-gray-500">
                    <IoWarning size={20} /> There are currently no available
                    data for this service
                  </span>
                </div>
              )}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default FaqList;
