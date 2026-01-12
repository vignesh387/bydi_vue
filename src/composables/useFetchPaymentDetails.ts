import Api from "@/api/api";
import { GetPaymentDetailsApi } from "@/utils/api-details";
import { DATA_FETCH_NOT_SUCCESSFULL } from "@/utils/constants";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";

export function useFetchPaymentDetails() {
  const loading = ref(false);
  const data = ref(null);

  onMounted(async () => {
    try {
      loading.value = true;
      const response = await Api({
        url: GetPaymentDetailsApi.uri,
        method: GetPaymentDetailsApi.method,
        securedHeader: GetPaymentDetailsApi.securedHeader,
      });
      loading.value = false;
      data.value = response;
    } catch (error) {
      loading.value = false;
      toast.error(DATA_FETCH_NOT_SUCCESSFULL);
    }
  });

  return { loading, data };
}
